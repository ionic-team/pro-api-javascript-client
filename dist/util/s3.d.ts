export interface S3SignedRequest {
    url: string;
    fields: any;
    [key: string]: any;
}
export declare const s3upload: (s3req: S3SignedRequest, fileData: string) => Promise<void>;
