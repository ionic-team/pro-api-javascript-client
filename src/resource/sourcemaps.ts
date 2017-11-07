import { BaseResource } from './base';
import { SubResource } from './sub';
import { S3UploadFields, s3upload } from '../util/s3';

export interface SourceMapCreatedResponse {
  fields: S3UploadFields
}

export interface SourceMap {
  sourcemap_id: string;
  app_id: string;
  version: string;
  commit: string;
  pro_snapshot_id: string;
  platform_string: string;
  name: string;
  content_url: string;
  created: string;
  deleted: string;
}


export class SourceMapResource extends SubResource {

  constructor(base: BaseResource) { super(base, '/sourcemaps'); }

  createSourcemap(appId: string, body: SourceMap): Promise<SourceMapCreatedResponse> { return super.post(appId + '/sourcemaps', body); }

  uploadSourcemap(body: SourceMapCreatedResponse, fileData: string): Promise<void> { return s3upload(body.fields, fileData); }
}
