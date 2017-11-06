import { Api, InternalConfig } from '../util/api';
export declare class BaseResource {
    endpoint: string;
    api: Api;
    constructor(endpoint: string, api: Api);
    del(pk: string, params?: any, internal?: InternalConfig): Promise<any>;
    get(pk: string, params?: any, internal?: InternalConfig): Promise<any>;
    list(params?: any, internal?: InternalConfig): Promise<any>;
    patch(pk: string, body: any, internal?: InternalConfig): Promise<any>;
    post(body: any, internal?: InternalConfig): Promise<any>;
}
