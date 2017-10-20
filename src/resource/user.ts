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

export class UserResource extends BaseResource {

  constructor(api: Api) { super('/users', api); }

  del(pk: string): Promise<any> { return super.del(pk); }

  delToken(pk: string, tokenId: string): Promise<any> { return super.del(pk + '/tokens/' + tokenId); }

  get(pk: string): Promise<User> { return super.get(pk); }

  getDashMeta(pk: string): Promise<any> { return super.get(pk + '/dash-metadata'); }

  listTokens(pk: string): Promise<any> { return super.get(pk + '/tokens'); }

  patch(pk: string, body: UserPatch): Promise<User> { return super.patch(pk, body); }

  post(body: User): Promise<User> { return super.post(body); }

  setDashMeta(pk: string, meta: any): Promise<any>  { return super.patch(pk + '/dash-metadata', meta); }
}
