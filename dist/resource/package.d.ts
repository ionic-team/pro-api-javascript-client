import { Api } from '../util/api';
export interface PackagePost {
    snapshot_id: string;
    type: string;
    platform: string;
    profile_tag?: string;
}
export interface PackageList {
    snapshots?: Array<string>;
    platform?: string;
}
export declare class PackageResource {
    private _base;
    constructor(api: Api);
    del(appId: string, pk: string): Promise<any>;
    download(appId: string, pk: string): Promise<any>;
    get(appId: string, pk: string): Promise<any>;
    list(appId: string, params?: PackageList): Promise<any>;
    patch(appId: string, pk: string, body: any): Promise<any>;
    post(appId: string, body: PackagePost): Promise<any>;
}
