import { request } from './http';

export declare interface S3UploadFields {
  url: string,
  fields: any;
  [key: string]: any;
}

export const s3upload = async (fields: S3UploadFields, fileData: string) => {
  let req = request('POST', fields.url);

  req = req
    .buffer()
    .field(fields)
    .field('file', fileData)
    .on('progress', (_event: any) => {
    })
    .end((err: any, res: any) => {
      if (err) {
        console.error('Unable to upload to S3');
        console.error(err);
        return Promise.reject(err);
      }
      if (res.status !== 204) {
        return Promise.reject(new Error(`Unexpected status code from AWS: ${res.status}`));
      }

      Promise.resolve();
    });
}