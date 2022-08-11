
import handler from "../util/handler";
import AWS from "aws-sdk";
import settings from "../settings";
// Might be useless if resource is public, and can be fetched by date name

export const main = handler(async (event) => {
    const today = new Date().toLocaleDateString().split("/").join(":");
    const s3 = new AWS.S3();
    AWS.config = new AWS.Config({
        accessKeyId: settings?.s3?.ACCESS_KEY_ID,
        secretAccessKey: settings?.s3?.aws?.SECRET_ACCESS_KEY,
        region: "us-west-1",
        signatureVersion: "v4",
    });
    const url = s3.getSignedUrl('getObject', { Bucket: "Cats", Key: "7:27:2022.JPG" })

    return url;
});