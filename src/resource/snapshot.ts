import { Api, ApiResponse } from '../util/api';
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

  del(appId: string, pk: string, params?: any): Promise<any> {
    return this._base.del(appId + '/snapshots/' + pk, params);
  }

  get(appId: string, pk: string, params?: any): Promise<any> {
    return this._base.get(appId + '/snapshots/' + pk, params);
  }

  list(appId: string, params?: any): Promise<any> {
    let queryString = appId + '/snapshots';
    if (params) {
      queryString += (queryString.indexOf('?') === -1 ? '?' : '&') + Object.keys(params).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k])).join('&');
    }
    return new Promise((resolve, reject) => {
      this._base.api.get(this._base.endpoint + queryString).then((res: ApiResponse) => {
        resolve(res.data);
      }, (err: ApiResponse) => {
        reject(err.error || {"error": "Unknown"});
      });
    });
  }

  patch(appId: string, pk: string, body: any): Promise<any> {
    return this._base.patch(appId + '/snapshots/' + pk, body);
  }

  post(appId: string, body: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this._base.api.post(this._base.endpoint + appId + '/snapshots', body).then((res: ApiResponse) => {
        resolve(res.data);
      }, (err: ApiResponse) => {
        reject(err.error || {"error": "Unknown"});
      });
    });
  }
}
