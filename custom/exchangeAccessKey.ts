/**
 * Bootstrap helper: exchanges an Islo API key (Descope access key) for a
 * short-lived session JWT.
 *
 * Uses raw `fetch` rather than the generated SDK so the token-provider
 * refresh path stays flat — no recursive client instantiation.
 */

export interface TokenResponse {
    session_token: string;
    refresh_token?: string;
    cookie_domain?: string;
    cookie_path?: string;
    cookie_max_age?: number;
    cookie_expiration?: number;
}

export interface ExchangeAccessKeyOptions {
    baseUrl: string;
    apiKey: string;
    /** Request timeout in milliseconds. Defaults to 10_000. */
    timeoutMs?: number;
    /** Override the global fetch implementation (e.g. for testing). */
    fetch?: typeof fetch;
}

export async function exchangeAccessKey(options: ExchangeAccessKeyOptions): Promise<TokenResponse> {
    const fetchImpl = options.fetch ?? fetch;
    const timeoutMs = options.timeoutMs ?? 10_000;

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), timeoutMs);

    try {
        const response = await fetchImpl(`${options.baseUrl}/auth/token`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ access_key: options.apiKey }),
            signal: controller.signal,
        });

        if (!response.ok) {
            const body = await response.text().catch(() => "");
            throw new Error(
                `Failed to exchange access key (${response.status} ${response.statusText}): ${body}`,
            );
        }

        const data = (await response.json()) as Partial<TokenResponse>;
        if (typeof data.session_token !== "string") {
            throw new Error(
                `Expected 'session_token' in exchange response, got keys: ${Object.keys(data).join(", ")}`,
            );
        }
        return data as TokenResponse;
    } finally {
        clearTimeout(timeout);
    }
}
