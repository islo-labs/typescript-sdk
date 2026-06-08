import { Islo as FernIslo } from "./Client.js";

type FernClientOptions = ConstructorParameters<typeof FernIslo>[0];

export declare namespace IsloBearerClient {
    export interface Options extends Omit<FernClientOptions, "apiKey"> {
        bearerToken: NonNullable<FernClientOptions["apiKey"]>;
    }
}

export class IsloBearerClient extends FernIslo {
    constructor(options: IsloBearerClient.Options) {
        if (options == null) {
            throw new Error("IsloBearerClient requires 'bearerToken'.");
        }
        if ("apiKey" in options) {
            throw new Error("IsloBearerClient accepts 'bearerToken', not 'apiKey'.");
        }

        const { bearerToken, ...clientOptions } = options;
        if (bearerToken == null) {
            throw new Error("IsloBearerClient requires 'bearerToken'.");
        }

        super({
            ...clientOptions,
            apiKey: bearerToken,
        });
    }
}
