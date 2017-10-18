import { Api } from '../util/api';
export declare class BaseResource {
    endpoint: string;
    api: Api;
    constructor(endpoint: string, api: Api);
    del(pk: string): Promise<any>;
    get(pk: string, params?: any): Promise<any>;
    list(params?: any): Promise<any>;
    patch(pk: string, body: any): Promise<any>;
    post(body: any): Promise<any>;
}
