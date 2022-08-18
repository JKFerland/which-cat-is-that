import { Bucket, Table } from "@serverless-stack/resources";

export function StorageStack({ stack, app }) {
  // Create an S3 bucket
  const bucket = new Bucket(stack, "Cats", {
    cors: [
      {
        allowedOrigins: ["*"],
        allowedHeaders: ["*"],
        allowedMethods: ["GET", "PUT", "POST", "DELETE", "HEAD"],
      },
    ],
  });
  const optionsTable = new Table(stack, "Options", {
    fields: {
      date: "string",
      options: "binary"
    },

    primaryIndex: { partitionKey: "date" },
  });
  return {
    bucket,
    optionsTable
  };
}