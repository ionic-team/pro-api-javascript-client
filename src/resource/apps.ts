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

export class AppsResource extends BaseResource {

  constructor(api: Api) { super('/apps', api); }

  del(pk: string, params?: any): Promise<App> { return super.del(pk, params); }

  get(pk: string): Promise<App> { return super.get(pk); }

  list(params?: any): Promise<Array<App>> { return super.list(params); }

  patch(pk: string, body: App): Promise<App> { return super.patch(pk, body); }

  post(body: App): Promise<App> { return super.post(body); }

  getDashMeta(pk: string): Promise<any> { return super.get(pk + '/dash-metadata'); }

  getFromSlug(slug: string): Promise<any> { return super.get('/slug/' + slug); }

  setDashMeta(pk: string, meta: DashMetadata): Promise<any> { return super.patch(pk + '/dash-metadata', meta); }

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
