import { afterEach, describe, expect, it, vi } from "vitest";

import { Islo, IsloApiEnvironment } from "../src/index.js";

const ORIGINAL_ENV = { ...process.env };

async function getClientEnvironment(client: Islo) {
    const environment = (client as any)._options.environment;
    return typeof environment === "function" ? await environment() : await environment;
}

afterEach(() => {
    process.env = { ...ORIGINAL_ENV };
    vi.restoreAllMocks();
});

describe("Islo wrapper", () => {
    it("uses production control and compute URLs by default", async () => {
        delete process.env.ISLO_BASE_URL;
        delete process.env.ISLO_COMPUTE_URL;
        delete process.env.ISLO_API_KEY;

        const client = new Islo();

        await expect(getClientEnvironment(client)).resolves.toEqual({
            control: "https://api.islo.dev",
            compute: "https://ca.compute.islo.dev",
        });
    });

    it("resolves control and compute URLs from environment variables", async () => {
        process.env.ISLO_BASE_URL = "https://control.env.example.com";
        process.env.ISLO_COMPUTE_URL = "https://compute.env.example.com";
        delete process.env.ISLO_API_KEY;

        const client = new Islo();

        await expect(getClientEnvironment(client)).resolves.toEqual({
            control: "https://control.env.example.com",
            compute: "https://compute.env.example.com",
        });
    });

    it("lets explicit URLs override env vars and environment presets", async () => {
        process.env.ISLO_BASE_URL = "https://control.env.example.com";
        process.env.ISLO_COMPUTE_URL = "https://compute.env.example.com";

        const client = new Islo({
            baseUrl: "https://control.explicit.example.com",
            computeUrl: "https://compute.explicit.example.com",
            environment: {
                control: "https://control.environment.example.com",
                compute: "https://compute.environment.example.com",
            },
        });

        await expect(getClientEnvironment(client)).resolves.toEqual({
            control: "https://control.explicit.example.com",
            compute: "https://compute.explicit.example.com",
        });
        expect((client as any)._options.baseUrl).toBeUndefined();
    });

    it("accepts the generated production environment export", async () => {
        const client = new Islo({ environment: IsloApiEnvironment.Production });

        await expect(getClientEnvironment(client)).resolves.toEqual(IsloApiEnvironment.Production);
    });

    it("accepts generated dynamic environment suppliers", async () => {
        const client = new Islo({
            environment: () => ({
                control: "https://control.dynamic.example.com",
                compute: "https://compute.dynamic.example.com",
            }),
        });

        await expect(getClientEnvironment(client)).resolves.toEqual({
            control: "https://control.dynamic.example.com",
            compute: "https://compute.dynamic.example.com",
        });
    });

    it("exchanges API keys against the resolved control URL", async () => {
        const fetchMock = vi.fn<typeof fetch>(async (input) => {
            expect(input).toBe("https://control.customer.example.com/auth/token");
            return new Response(
                JSON.stringify({
                    session_token: "session-jwt",
                    cookie_max_age: 600,
                }),
                {
                    status: 200,
                    headers: { "Content-Type": "application/json" },
                },
            );
        });

        const client = new Islo({
            apiKey: "ak_test",
            baseUrl: "https://control.customer.example.com",
            computeUrl: "https://compute.customer.example.com",
            fetch: fetchMock,
        });

        const auth = await (client as any)._options.authProvider.getAuthRequest();

        expect(auth.headers.Authorization).toBe("Bearer session-jwt");
        expect(fetchMock).toHaveBeenCalledTimes(1);
    });

    it("rejects mixed apiKey and bearerToken auth", () => {
        expect(() => {
            new Islo({
                apiKey: "access-key",
                bearerToken: "session-jwt",
            });
        }).toThrow("Islo accepts either 'apiKey' or 'bearerToken', not both.");
    });

    it("uses the supplied bearer token directly", async () => {
        const client = new Islo({
            bearerToken: async () => "session-jwt",
            environment: {
                control: "https://control.customer.example.com",
                compute: "https://compute.customer.example.com",
            },
        });

        const auth = await (client as any)._options.authProvider.getAuthRequest();

        expect(auth.headers.Authorization).toBe("Bearer session-jwt");
    });

    it("does not exchange bearer tokens through /auth/token", async () => {
        const fetchMock = vi.fn<typeof fetch>();
        const client = new Islo({
            bearerToken: "session-jwt",
            environment: {
                control: "https://control.customer.example.com",
                compute: "https://compute.customer.example.com",
            },
            fetch: fetchMock,
        });

        const auth = await (client as any)._options.authProvider.getAuthRequest();

        expect(auth.headers.Authorization).toBe("Bearer session-jwt");
        expect(fetchMock).not.toHaveBeenCalled();
    });
});
