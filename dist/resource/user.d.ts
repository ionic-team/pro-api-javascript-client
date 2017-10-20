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
export declare class UserResource extends BaseResource {
    constructor(api: Api);
    del(pk: string): Promise<any>;
    delToken(pk: string, tokenId: string): Promise<any>;
    get(pk: string): Promise<User>;
    getDashMeta(pk: string): Promise<any>;
    listTokens(pk: string): Promise<any>;
    patch(pk: string, body: UserPatch): Promise<User>;
    post(body: User): Promise<User>;
    setDashMeta(pk: string, meta: any): Promise<any>;
}
