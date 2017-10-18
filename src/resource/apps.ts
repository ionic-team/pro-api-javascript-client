import { Api, ApiResponse } from '../util/api';
import { BaseResource } from './base';

export interface AppTransfer {
  to: string;
}

export interface DashMetadata {
  data: any;
}

export class AppsResource extends BaseResource {
  constructor(api: Api) { super('/apps', api); }

  getDashMeta(pk: string): Promise<any> {
    return this.get(pk + '/dash-metadata');
  }

  getFromSlug(slug: string): Promise<any> {
    return this.get('/slug/' + slug);
  }

  setDashMeta(pk: string, meta: DashMetadata): Promise<any> {
    return this.patch(pk + '/dash-metadata', meta);
  }

  transfer(pk: string, to: AppTransfer): Promise<any> {
    return new Promise((resolve, reject) => {
      this.api.post(this.endpoint + '/' + pk, to).then((res: ApiResponse) => {
        resolve(res.data);
      }, (err: ApiResponse) => {
        reject(err.error || {"error": "Unknown"});
      });
    });
  }
}
