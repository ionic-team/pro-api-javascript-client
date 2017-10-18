import { Api, ApiResponse } from '../util/api';
import { BaseResource } from './base';

export interface AppTransfer {
  to: string;
}

export interface DashMetadata {
  data: any;
}

export interface OrgInvite {
}

export interface Org {
  id: string;
  name: string;
  slug: string;
  seats: number;
  avatar: string;
  description: string;
  email: string;
  created: string;
  plan: string;
  stripe_customer: boolean;
  invites: Array<OrgInvite>;
}

export interface App {
  id: string;
  name: string;
  slug: string;
  owner: number;
  org_id: string;
  created: string;
  updated: string;
  plan: string;
  icon: string;
  org: Org;
  repo_url: string;
}

export class AppsResource {
  private _base: BaseResource

  constructor(api: Api) {
    this._base = new BaseResource('/apps', api);
  }

  del(pk: string, params?: any): Promise<App> {
    return this._base.del(pk, params);
  }

  get(pk: string): Promise<App> {
    return this._base.get(pk);
  }

  list(params?: any): Promise<Array<App>> {
    return this._base.list(params);
  }

  patch(pk: string, body: App): Promise<App> {
    return this._base.patch(pk, body);
  }

  post(body: App): Promise<App> {
    return this._base.post(body);
  }

  getDashMeta(pk: string): Promise<any> {
    return this.get(pk + '/dash-metadata');
  }

  getFromSlug(slug: string): Promise<any> {
    return this.get('/slug/' + slug);
  }

  setDashMeta(pk: string, meta: DashMetadata): Promise<any> {
    return this._base.patch(pk + '/dash-metadata', meta);
  }

  transfer(pk: string, to: AppTransfer): Promise<any> {
    return new Promise((resolve, reject) => {
      this._base.api.post(this._base.endpoint + '/' + pk, to).then((res: ApiResponse) => {
        resolve(res.data);
      }, (err: ApiResponse) => {
        reject(err.error || {"error": "Unknown"});
      });
    });
  }
}
