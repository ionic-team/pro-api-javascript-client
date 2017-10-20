import { BaseResource } from './base';
import { SubResource } from './sub';
import { User } from './user'

export interface SnapshotListArgs {
  ids?: Array<string>;
  users?: Array<number>;
  ref?: string;
}

export interface SnapshotIOSVersion {
  min: string;
  max: string;
  eq: string;
}

export interface SnapshotAndroidVersion {
  min: string;
  max: string;
  eq: string;
}

export interface Snapshot {
  id: string;
  note: string;
  sha: string;
  ref: string;
  ref_type: string;
  state: string;
  user: User;
  ios_version: SnapshotIOSVersion;
  android_version: SnapshotAndroidVersion;
  created: string;
  short_sha: string;
}

export class SnapshotsResource extends SubResource {

  constructor(base: BaseResource) { super(base, '/snapshots'); }

  del(appId: string, pk: string): Promise<Snapshot> { return super.del(appId, pk); }

  get(appId: string, pk: string): Promise<Snapshot> { return super.get(appId, pk); }

  getUrl(appId: string, pk: string): Promise<any> { return super.get(appId, pk + '/get-url'); }

  list(appId: string, params?: SnapshotListArgs): Promise<Array<Snapshot>> { return super.list(appId, params); }

  patch(appId: string, pk: string, body: Snapshot): Promise<Snapshot> { return super.patch(appId, pk, body); }

  post(appId: string, body: Snapshot): Promise<Snapshot> { return super.post(appId, body); }
}
