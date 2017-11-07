import { request } from './http';

export declare interface S3SignedRequest {
  url: string,
  fields: any;
  [key: string]: any;
}

export const s3upload = async (s3req: S3SignedRequest, fileData: string) => {
  let req = request('POST', s3req.url);

  try {

    req = req
      .buffer()
      .field(s3req.fields)
      .field('file', fileData)
      .end((err: any, res: any) => {
        if (err) {
          console.error('Unable to upload to S3');
          console.error(err);
          return Promise.reject(err);
        }
        if (res.status !== 204) {
          return Promise.reject(new Error(`Unexpected status code from AWS: ${res.status}`));
        }

        Promise.resolve(res);
      });
  } catch(e) {
    console.error('Error uploading')
    console.error(e);
  }
}