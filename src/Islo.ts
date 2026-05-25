/**
 * High-level Islo client with automatic API key exchange and token refresh.
 *
 * Mirrors the Python `Islo` class: provide an `apiKey` and the client
 * exchanges it for a session JWT (refreshing before expiry) automatically.
 */

import type { BaseClientOptions } from "./BaseClient.js";
import { Islo as FernIslo } from "./Client.js";
import { TokenProvider } from "./custom/tokenProvider.js";
import type { IsloApiEnvironmentUrls } from "./environments.js";

const DEFAULT_BASE_URL = "https://api.islo.dev";
const DEFAULT_COMPUTE_URL = "https://compute.islo.dev";
const ENV_API_KEY = "ISLO_API_KEY";
const ENV_BASE_URL = "ISLO_BASE_URL";
const ENV_COMPUTE_URL = "ISLO_COMPUTE_URL";

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
    environment?: IsloApiEnvironmentUrls;
}): IsloApiEnvironmentUrls {
    if (environment != null && baseUrl == null && computeUrl == null) {
        return environment;
    }

    return {
        control: baseUrl ?? readEnv(ENV_BASE_URL) ?? environment?.control ?? DEFAULT_BASE_URL,
        compute: computeUrl ?? readEnv(ENV_COMPUTE_URL) ?? environment?.compute ?? DEFAULT_COMPUTE_URL,
    };
}

export declare namespace Islo {
    export interface Options extends Omit<BaseClientOptions, "apiKey" | "baseUrl" | "environment"> {
        /**
         * Islo API key (Descope access key). Exchanged for a short-lived JWT
         * automatically. Falls back to the `ISLO_API_KEY` environment variable.
         */
        apiKey?: string;
        /**
         * Override the control-plane API base URL. Falls back to `ISLO_BASE_URL` env var
         * or `https://api.islo.dev`.
         */
        baseUrl?: string;
        /**
         * Override the compute-plane API base URL. Falls back to `ISLO_COMPUTE_URL` env var
         * or `https://compute.islo.dev`.
         */
        computeUrl?: string;
        /**
         * Fully resolved Fern environment. Explicit `baseUrl` or `computeUrl`
         * values override the corresponding URL.
         */
        environment?: IsloApiEnvironmentUrls;
        /** Refresh `refreshMarginSec` seconds before token expiry. Defaults to 60. */
        refreshMarginSec?: number;
    }
}

export class Islo extends FernIslo {
    constructor(options: Islo.Options = {}) {
        const {
            apiKey: apiKeyOption,
            baseUrl,
            computeUrl,
            environment,
            refreshMarginSec,
            ...clientOptions
        } = options;
        const resolvedEnvironment = resolveEnvironment({ baseUrl, computeUrl, environment });
        const apiKey = apiKeyOption ?? readEnv(ENV_API_KEY);

        let bearer: BaseClientOptions["apiKey"];
        if (apiKey != null) {
            const provider = new TokenProvider({
                baseUrl: resolvedEnvironment.control,
                apiKey,
                refreshMarginSec,
                fetch: options.fetch,
            });
            bearer = () => provider.getToken();
        }

        super({
            ...clientOptions,
            environment: resolvedEnvironment,
            apiKey: bearer,
        });
    }
}
