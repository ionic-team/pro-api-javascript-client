import { Api } from '../util/api';
import { BaseResource } from './base';
import { Snapshot } from './snapshot';

export interface PackagePost {
  snapshot_id: string;
  type: string;
  platform: string;
  profile_tag?: string
}

export interface PackageList {
  snapshots?: Array<string>;
  platform?: string;
}

export interface NativeBuild {
  id: string;
  platform: string;
  type: string;
  created: string;
  finished: string;
  state: string;
  snapshot: Snapshot;
}

export class PackageResource {
  private _base: BaseResource

  constructor(api: Api) {
    this._base = new BaseResource('/apps/', api);
  }

  del(appId: string, pk: string): Promise<NativeBuild> {
    this._base.endpoint = '/apps/' + appId + '/native-builds';
    return this._base.del(pk);
  }

  download(appId: string, pk: string): Promise<any> {
    this._base.endpoint = '/apps/' + appId + '/native-builds';
    return this._base.get(pk + '/download');
  }

  get(appId: string, pk: string): Promise<NativeBuild> {
    this._base.endpoint = '/apps/' + appId + '/native-builds';
    return this._base.get(pk);
  }

  list(appId: string, params?: PackageList): Promise<Array<NativeBuild>> {
    this._base.endpoint = '/apps/' + appId + '/native-builds';
    return this._base.list(params);
  }

  patch(appId: string, pk: string, body: NativeBuild): Promise<NativeBuild> {
    this._base.endpoint = '/apps/' + appId + '/native-builds';
    return this._base.patch(pk, body);
  }

  post(appId: string, body: PackagePost): Promise<any> {
    this._base.endpoint = '/apps/' + appId + '/native-builds';
    return this._base.post(body);
  }
}
