export interface S3UploadFields {
    url: string;
    fields: any;
    [key: string]: any;
}
export declare const s3upload: (fields: S3UploadFields, fileData: string) => Promise<void>;
