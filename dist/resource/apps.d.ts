import { Api } from '../util/api';
import { BaseResource } from './base';
export interface AppTransfer {
    to: string;
}
export interface DashMetadata {
    data: any;
}
export declare class AppsResource extends BaseResource {
    constructor(api: Api);
    getDashMeta(pk: string): Promise<any>;
    getFromSlug(slug: string): Promise<any>;
    setDashMeta(pk: string, meta: DashMetadata): Promise<any>;
    transfer(pk: string, to: AppTransfer): Promise<any>;
}
