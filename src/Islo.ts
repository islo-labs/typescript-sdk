/**
 * High-level Islo client with automatic API key exchange and token refresh.
 *
 * Mirrors the Python `Islo` class: provide an `apiKey` to exchange it
 * for a session JWT, or provide an existing `bearerToken` directly.
 */

import type { BaseClientOptions } from "./BaseClient.js";
import { Islo as FernIslo } from "./Client.js";
import { TokenProvider } from "./custom/tokenProvider.js";

const DEFAULT_BASE_URL = "https://api.islo.dev";
const DEFAULT_COMPUTE_URL = "https://ca.compute.islo.dev";
const ENV_API_KEY = "ISLO_API_KEY";
const ENV_BASE_URL = "ISLO_BASE_URL";
const ENV_COMPUTE_URL = "ISLO_COMPUTE_URL";
type IsloEnvironment = BaseClientOptions["environment"];

function readEnv(name: string): string | undefined {
    if (typeof process !== "undefined" && process.env != null) {
        const v = process.env[name];
        return v && v.length > 0 ? v : undefined;
    }
    return undefined;
}

function resolveEnvironment({
    baseUrl,
    computeUrl,
    environment,
}: {
    baseUrl?: string;
    computeUrl?: string;
    environment?: IsloEnvironment;
}): IsloEnvironment {
    if (environment != null && baseUrl == null && computeUrl == null) {
        return environment;
    }

    if (environment == null) {
        return {
            control: baseUrl ?? readEnv(ENV_BASE_URL) ?? DEFAULT_BASE_URL,
            compute: computeUrl ?? readEnv(ENV_COMPUTE_URL) ?? DEFAULT_COMPUTE_URL,
        };
    }

    return async () => {
        const resolved = await resolveSupplier(environment);

        return {
            control: baseUrl ?? readEnv(ENV_BASE_URL) ?? resolved.control ?? DEFAULT_BASE_URL,
            compute: computeUrl ?? readEnv(ENV_COMPUTE_URL) ?? resolved.compute ?? DEFAULT_COMPUTE_URL,
        };
    };
}

async function resolveSupplier<T>(supplier: T | Promise<T> | (() => T | Promise<T>)): Promise<T> {
    return typeof supplier === "function" ? await (supplier as () => T | Promise<T>)() : await supplier;
}

export declare namespace Islo {
    export interface Options extends Omit<BaseClientOptions, "apiKey" | "baseUrl" | "environment"> {
        /**
         * Islo API key (Descope access key). Exchanged for a short-lived JWT
         * automatically. Falls back to the `ISLO_API_KEY` environment variable.
         */
        apiKey?: string;
        /**
         * Existing bearer token. Used directly without access-key exchange.
         */
        bearerToken?: NonNullable<BaseClientOptions["apiKey"]>;
        /**
         * Override the control-plane API base URL. Falls back to `ISLO_BASE_URL` env var
         * or `https://api.islo.dev`.
         */
        baseUrl?: string;
        /**
         * Override the compute-plane API base URL. Falls back to `ISLO_COMPUTE_URL` env var
         * or `https://ca.compute.islo.dev`.
         */
        computeUrl?: string;
        /**
         * Fully resolved Fern environment. Explicit `baseUrl` or `computeUrl`
         * values override the corresponding URL.
         */
        environment?: IsloEnvironment;
        /** Refresh `refreshMarginSec` seconds before token expiry. Defaults to 60. */
        refreshMarginSec?: number;
    }
}

export class Islo extends FernIslo {
    constructor(options: Islo.Options = {}) {
        const {
            apiKey: apiKeyOption,
            bearerToken,
            baseUrl,
            computeUrl,
            environment,
            refreshMarginSec,
            ...clientOptions
        } = options;
        const resolvedEnvironment = resolveEnvironment({ baseUrl, computeUrl, environment });

        let bearer: BaseClientOptions["apiKey"];
        if (apiKeyOption != null && bearerToken != null) {
            throw new Error("Islo accepts either 'apiKey' or 'bearerToken', not both.");
        }
        if (bearerToken != null) {
            bearer = bearerToken;
        } else {
            const apiKey = apiKeyOption ?? readEnv(ENV_API_KEY);
            if (apiKey == null) {
                bearer = undefined;
            } else {
                let provider: TokenProvider | undefined;
                let providerBaseUrl: string | undefined;
                bearer = async () => {
                    const { control } = await resolveSupplier(resolvedEnvironment);
                    if (provider == null || providerBaseUrl !== control) {
                        provider = new TokenProvider({
                            baseUrl: control,
                            apiKey,
                            refreshMarginSec,
                            fetch: options.fetch,
                        });
                        providerBaseUrl = control;
                    }
                    return provider.getToken();
                };
            }
        }

        super({
            ...clientOptions,
            environment: resolvedEnvironment,
            apiKey: bearer,
        });
    }
}
