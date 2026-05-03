/**
 * High-level Islo client with automatic API key exchange and token refresh.
 *
 * Mirrors the Python `Islo` class: provide an `apiKey` and the client
 * exchanges it for a session JWT (refreshing before expiry) automatically.
 *
 * For browser use where you already hold a session JWT (e.g. from Descope's
 * frontend SDK), pass `token` instead — it is used directly as the Bearer
 * credential without any exchange. `apiKey` takes precedence if both are set.
 */

import type { BaseClientOptions } from "./BaseClient.js";
import { IsloApiClient } from "./Client.js";
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
    export interface Options extends Omit<BaseClientOptions, "environment" | "apiKey"> {
        /**
         * Islo API key (Descope access key, e.g. `ak_...`). Exchanged for a
         * short-lived JWT automatically. Falls back to the `ISLO_API_KEY`
         * environment variable. Takes precedence over `token` if both are set.
         */
        apiKey?: string;
        /**
         * Pre-existing session JWT, or a callback returning one. Used as the
         * Bearer credential directly — no exchange, no refresh. Use this from
         * browser frontends where you've already authenticated the user (e.g.
         * via Descope's frontend SDK) and the JWT lifecycle lives there.
         * Ignored if `apiKey` (or `ISLO_API_KEY`) is provided.
         */
        token?: string | (() => string | Promise<string>);
        /**
         * Override the API base URL. Falls back to `ISLO_BASE_URL` env var
         * or `https://api.islo.dev`.
         */
        baseUrl?: string;
        /**
         * Refresh `refreshMarginSec` seconds before token expiry. Defaults
         * to 60. Only applies to the `apiKey` exchange flow.
         */
        refreshMarginSec?: number;
    }
}

export class Islo extends IsloApiClient {
    constructor(options: Islo.Options = {}) {
        const baseUrl = options.baseUrl ?? readEnv(ENV_BASE_URL) ?? DEFAULT_BASE_URL;
        const apiKey = options.apiKey ?? readEnv(ENV_API_KEY);

        let bearer: BaseClientOptions["apiKey"];
        if (apiKey != null) {
            const provider = new TokenProvider({
                baseUrl,
                apiKey,
                refreshMarginSec: options.refreshMarginSec,
            });
            bearer = () => provider.getToken();
        } else if (options.token != null) {
            bearer = options.token;
        }

        super({
            ...options,
            environment: baseUrl,
            apiKey: bearer,
        });
    }
}
