import { BaseResource } from './base';
import { SubResource } from './sub';
import { User } from './user'
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
  name: User;
  content_url: string;
  created: string;
  deleted: string;
}

export class MonitoringResource extends SubResource {

  constructor(base: BaseResource) { super(base, '/monitoring'); }

  createSourcemap(appId: string, body: SourceMap): Promise<SourceMapCreatedResponse> { return super.post(appId + '/sourcemaps', body); }
  uploadSourcemap(body: SourceMapCreatedResponse, fileData: string): Promise<void> { return s3upload(body.fields, fileData); }
}
