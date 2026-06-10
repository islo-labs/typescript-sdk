/**
 * This is a custom test file, if you wish to add more tests
 * to your SDK.
 * Be sure to mark this file in `.fernignore`.
 *
 * If you include example requests/responses in your fern definition,
 * you will have tests automatically generated for you.
 */
import { Islo } from "../src/index.js";

describe("test", () => {
    it("default", () => {
        expect(true).toBe(true);
    });

    it("rejects mixed apiKey and exchangedToken auth", () => {
        expect(() => {
            new Islo({
                apiKey: "access-key",
                exchangedToken: "session-jwt",
            });
        }).toThrow("Islo accepts either 'apiKey' or 'exchangedToken', not both.");
    });

    it("uses the supplied exchanged token directly", async () => {
        const client = new Islo({
            exchangedToken: async () => "session-jwt",
            environment: {
                control: "https://control.customer.example.com",
                compute: "https://compute.customer.example.com",
            },
        });

        const auth = await (client as any)._options.authProvider.getAuthRequest();

        expect(auth.headers.Authorization).toBe("Bearer session-jwt");
    });

    it("does not exchange supplied exchanged tokens through /auth/token", async () => {
        const fetchMock = vi.fn<typeof fetch>();
        const client = new Islo({
            exchangedToken: "session-jwt",
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
