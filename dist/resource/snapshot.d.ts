import { Api } from '../util/api';
export interface SnapshotListArgs {
    ids?: Array<string>;
    users?: Array<number>;
    ref?: string;
}
export declare class SnapshotsResource {
    private _base;
    constructor(api: Api);
    del(appId: string, pk: string): Promise<any>;
    get(appId: string, pk: string): Promise<any>;
    getUrl(appId: string, pk: string): Promise<any>;
    list(appId: string, params?: SnapshotListArgs): Promise<any>;
    patch(appId: string, pk: string, body: any): Promise<any>;
    post(appId: string, body: any): Promise<any>;
}
