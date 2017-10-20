import { BaseResource } from './base';
export declare class SubResource {
    endpoint: string;
    base: BaseResource;
    constructor(base: BaseResource, endpoint: string);
    del(basePk: string, pk: string): Promise<any>;
    get(basePk: string, pk: string): Promise<any>;
    list(basePk: string, params?: any): Promise<Array<any>>;
    patch(basePk: string, pk: string, body: any): Promise<any>;
    post(basePk: string, body: any): Promise<any>;
}
