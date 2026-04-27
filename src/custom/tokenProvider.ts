/**
 * Auto-refreshing JWT provider for the Islo SDK.
 *
 * Caches tokens per `(baseUrl, apiKey)` pair across all instances so multiple
 * `Islo()` clients with the same credentials share a single token exchange.
 * Concurrent refresh calls dedupe through a shared in-flight promise.
 */

import { exchangeAccessKey, type ExchangeAccessKeyOptions } from "./exchangeAccessKey.js";

interface TokenState {
    token: string | null;
    /** Unix epoch seconds at which the token should be considered expired. */
    expiresAt: number;
    pending: Promise<string> | null;
}

const stateCache = new Map<string, TokenState>();

export interface TokenProviderOptions {
    baseUrl: string;
    apiKey: string;
    /** Refresh `refreshMarginSec` seconds before the server-reported expiry. Defaults to 60. */
    refreshMarginSec?: number;
    /** Override the global fetch implementation. */
    fetch?: typeof fetch;
}

export class TokenProvider {
    private readonly cacheKey: string;
    private readonly refreshMarginSec: number;
    private readonly options: TokenProviderOptions;

    constructor(options: TokenProviderOptions) {
        this.options = options;
        this.cacheKey = `${options.baseUrl} ${options.apiKey}`;
        this.refreshMarginSec = options.refreshMarginSec ?? 60;
        if (!stateCache.has(this.cacheKey)) {
            stateCache.set(this.cacheKey, { token: null, expiresAt: 0, pending: null });
        }
    }

    /** Return a valid JWT, refreshing if expired. Safe under concurrency. */
    async getToken(): Promise<string> {
        const state = stateCache.get(this.cacheKey)!;
        const nowSec = Date.now() / 1000;

        if (state.token && nowSec < state.expiresAt) {
            return state.token;
        }
        if (state.pending) {
            return state.pending;
        }

        state.pending = this.refresh().finally(() => {
            state.pending = null;
        });
        return state.pending;
    }

    private async refresh(): Promise<string> {
        const exchangeOptions: ExchangeAccessKeyOptions = {
            baseUrl: this.options.baseUrl,
            apiKey: this.options.apiKey,
            fetch: this.options.fetch,
        };
        const data = await exchangeAccessKey(exchangeOptions);

        const state = stateCache.get(this.cacheKey)!;
        state.token = data.session_token;
        const maxAge = data.cookie_max_age ?? 600;
        state.expiresAt = Date.now() / 1000 + Math.max(maxAge - this.refreshMarginSec, 0);
        return state.token;
    }
}
