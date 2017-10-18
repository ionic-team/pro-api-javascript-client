import { Api } from '../util/api';
import { BaseResource } from './base';

export interface User {
  id: number;
  username: string;
  name: string;
  email: string;
  created: string;
  plan: string;
  avatars: any;
  change_username: boolean;
}

export interface UserPatch {
  username?: string;
  name?: string; 
  email?: string;
  new_password?: string;
  password: string;
}

export class UserResource {
  private _base: BaseResource

  constructor(api: Api) {
    this._base = new BaseResource('/users', api);
  }

  del(pk: string): Promise<any> {
    return this._base.del(pk);
  }

  delToken(pk: string, tokenId: string): Promise<any> {
    return this._base.del(pk + '/tokens/' + tokenId);
  }

  get(pk: string): Promise<User> {
    return this._base.get(pk);
  }

  getDashMeta(pk: string): Promise<any> {
    return this._base.get(pk + '/dash-metadata');
  }

  listTokens(pk: string): Promise<any> {
    return this._base.get(pk + '/tokens');
  }

  patch(pk: string, body: UserPatch): Promise<User> {
    return this._base.patch(pk, body);
  }

  post(body: User): Promise<User> {
    return this._base.post(body);
  }

  setDashMeta(pk: string, meta: any): Promise<any>  {
    return this.patch(pk + '/dash-metadata', meta);
  }
}
