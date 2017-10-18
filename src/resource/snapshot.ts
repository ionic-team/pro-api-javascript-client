import { Api } from '../util/api';
import { BaseResource } from './base';

export interface SnapshotListArgs {
  ids?: Array<string>;
  users?: Array<number>;
  ref?: string;
}

export class SnapshotsResource {
  private _base: BaseResource

  constructor(api: Api) {
    this._base = new BaseResource('/apps/', api);
  }

  del(appId: string, pk: string): Promise<any> {
    this._base.endpoint = '/apps/' + appId + '/snapshots';
    return this._base.del(pk);
  }

  get(appId: string, pk: string): Promise<any> {
    this._base.endpoint = '/apps/' + appId + '/snapshots';
    return this._base.get(pk);
  }

  getUrl(appId: string, pk: string): Promise<any> {
    this._base.endpoint = '/apps/' + appId + '/snapshots';
    return this._base.get(pk + '/get-url');
  }

  list(appId: string, params?: SnapshotListArgs): Promise<any> {
    this._base.endpoint = '/apps/' + appId + '/snapshots';
    return this._base.list(params);
  }

  patch(appId: string, pk: string, body: any): Promise<any> {
    this._base.endpoint = '/apps/' + appId + '/snapshots';
    return this._base.patch(pk, body);
  }

  post(appId: string, body: any): Promise<any> {
    this._base.endpoint = '/apps/' + appId + '/snapshots';
    return this._base.post(body);
  }
}
