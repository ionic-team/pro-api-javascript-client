import { BaseResource } from './base';
import { SubResource } from './sub';
import { S3SignedRequest, s3upload } from '../util/s3';

export interface SourceMapCreatedResponse {
  name: string;
  version: string;
  commit: string;
  platform_string: string;
  sourcemap_post: S3SignedRequest;
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

export interface SourceMapCreateRequest {
  app_id: string;
  name: string;
  version: string;
  pro_snapshot_id?: string;
  platform_string?: string;
  commit?: string;
}


export class SourceMapResource extends SubResource {

  constructor(base: BaseResource) { super(base, '/sourcemaps'); }

  createSourcemap(appId: string, body: SourceMapCreateRequest): Promise<SourceMapCreatedResponse> { return super.post(appId, body); }

  uploadSourcemap(body: SourceMapCreatedResponse, fileData: string): Promise<void> { return s3upload(body.sourcemap_post, fileData); }
}
