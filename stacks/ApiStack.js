import { Api, use } from "@serverless-stack/resources";
import { StorageStack } from "./StorageStack";

export function ApiStack({ stack, app }) {
    const { optionsTable } = use(StorageStack);

    // Create the API
    const api = new Api(stack, "Api", {
        defaults: {
            function: {
                permissions: [optionsTable],
                environment: {
                    OPTIONS_TABLE_NAME: optionsTable.tableName,
                },
            },
        },
        cors: {
            allowMethods: ["GET"],
        },
        routes: {
            "GET /": "functions/getTodaysCat.main",
            "POST /": "functions/createGame.main",
            "GET /game": "functions/getTodaysGame.main",
        },
    });

    // Show the API endpoint in the output
    stack.addOutputs({
        ApiEndpoint: api.url,
    });

    // Return the API resource
    return {
        api,
    };
}