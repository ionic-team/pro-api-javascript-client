import { Api } from '../util/api';
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
export declare class AppsResource {
    private _base;
    constructor(api: Api);
    del(pk: string, params?: any): Promise<App>;
    get(pk: string): Promise<App>;
    list(params?: any): Promise<Array<App>>;
    patch(pk: string, body: App): Promise<App>;
    post(body: App): Promise<App>;
    getDashMeta(pk: string): Promise<any>;
    getFromSlug(slug: string): Promise<any>;
    setDashMeta(pk: string, meta: DashMetadata): Promise<any>;
    transfer(pk: string, to: AppTransfer): Promise<any>;
}
