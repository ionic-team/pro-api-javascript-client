import { Api } from '../util/api';
import { BaseResource } from './base';
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

export class SnapshotsResource {
  private _base: BaseResource

  constructor(api: Api) {
    this._base = new BaseResource('/apps/', api);
  }

  del(appId: string, pk: string): Promise<Snapshot> {
    this._base.endpoint = '/apps/' + appId + '/snapshots';
    return this._base.del(pk);
  }

  get(appId: string, pk: string): Promise<Snapshot> {
    this._base.endpoint = '/apps/' + appId + '/snapshots';
    return this._base.get(pk);
  }

  getUrl(appId: string, pk: string): Promise<any> {
    this._base.endpoint = '/apps/' + appId + '/snapshots';
    return this._base.get(pk + '/get-url');
  }

  list(appId: string, params?: SnapshotListArgs): Promise<Array<Snapshot>> {
    this._base.endpoint = '/apps/' + appId + '/snapshots';
    return this._base.list(params);
  }

  patch(appId: string, pk: string, body: Snapshot): Promise<Snapshot> {
    this._base.endpoint = '/apps/' + appId + '/snapshots';
    return this._base.patch(pk, body);
  }

  post(appId: string, body: Snapshot): Promise<Snapshot> {
    this._base.endpoint = '/apps/' + appId + '/snapshots';
    return this._base.post(body);
  }
}
