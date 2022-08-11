import handler from "../util/handler";
import dynamoDb from "../util/dynamodb";

export const main = handler(async (event) => {
    let today = new Date().toISOString().split("T")[0];

    const params = {
        TableName: process.env.OPTIONS_TABLE_NAME,
        Key: {
            date: today,
        },
    };

    const result = await dynamoDb.get(params);
    if (!result.Item) {
        throw new Error("Item not found.");
    }

    // Return the retrieved item
    return result.Item;
});