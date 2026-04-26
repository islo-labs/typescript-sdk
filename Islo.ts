/**
 * High-level Islo client with automatic API key exchange and token refresh.
 *
 * Mirrors the Python `Islo` class: provide an `apiKey` and the client
 * exchanges it for a session JWT (refreshing before expiry) automatically.
 */

import type { BaseClientOptions } from "./BaseClient.js";
import { IsloClient } from "./Client.js";
import { TokenProvider } from "./custom/tokenProvider.js";

const DEFAULT_BASE_URL = "https://api.islo.dev";
const ENV_API_KEY = "ISLO_API_KEY";
const ENV_BASE_URL = "ISLO_BASE_URL";

function readEnv(name: string): string | undefined {
    if (typeof process !== "undefined" && process.env != null) {
        const v = process.env[name];
        return v && v.length > 0 ? v : undefined;
    }
    return undefined;
}

export declare namespace Islo {
    export interface Options extends Omit<BaseClientOptions, "environment"> {
        /**
         * Islo API key (Descope access key). Exchanged for a short-lived JWT
         * automatically. Falls back to the `ISLO_API_KEY` environment variable.
         */
        apiKey?: string;
        /**
         * Override the API base URL. Falls back to `ISLO_BASE_URL` env var
         * or `https://api.islo.dev`.
         */
        baseUrl?: string;
        /** Refresh `refreshMarginSec` seconds before token expiry. Defaults to 60. */
        refreshMarginSec?: number;
    }
}

export class Islo extends IsloClient {
    constructor(options: Islo.Options = {}) {
        const baseUrl = options.baseUrl ?? readEnv(ENV_BASE_URL) ?? DEFAULT_BASE_URL;
        const apiKey = options.apiKey ?? readEnv(ENV_API_KEY);

        let token = options.token;
        if (token == null && apiKey != null) {
            const provider = new TokenProvider({
                baseUrl,
                apiKey,
                refreshMarginSec: options.refreshMarginSec,
            });
            token = () => provider.getToken();
        }

        super({
            ...options,
            environment: baseUrl,
            token,
        });
    }
}
