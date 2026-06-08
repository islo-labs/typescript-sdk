import type { BaseClientOptions } from "./BaseClient.js";
import { Islo as FernIslo } from "./Client.js";

export declare namespace IsloBearerClient {
    export interface Options extends Omit<BaseClientOptions, "apiKey"> {
        bearerToken: NonNullable<BaseClientOptions["apiKey"]>;
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
