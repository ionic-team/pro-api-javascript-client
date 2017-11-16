import { Api, InternalConfig } from '../util/api';
export declare class BaseResource {
    endpoint: string;
    api: Api;
    constructor(endpoint: string, api: Api);
    requestPromise(executor: (resolve: Function, reject: Function) => void): Promise<any>;
    del(pk: string, params?: any, path?: string, internal?: InternalConfig): Promise<any>;
    get(pk: string, params?: any, path?: string, internal?: InternalConfig): Promise<any>;
    list(params?: any, path?: string, internal?: InternalConfig): Promise<any>;
    patch(pk: string, body: any, path?: string, internal?: InternalConfig): Promise<any>;
    post(body: any, path?: string, internal?: InternalConfig): Promise<any>;
}
