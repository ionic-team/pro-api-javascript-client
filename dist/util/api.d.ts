import { Environment } from '../environment';
export interface ApiError {
    link?: string;
    details: any;
    type: string;
    message: string;
}
export interface ApiMeta {
    status: number;
    request_id?: string;
    version: string;
}
export interface ApiResponse {
    data: any;
    meta: ApiMeta;
    error?: ApiError;
}
export interface ApiCallConfig {
    method: string;
    body?: any;
}
export declare class Api {
    host: string;
    apiToken: string;
    constructor(env: Environment);
    private _call(endpoint, config);
    del(endpoint: string): Promise<ApiResponse>;
    get(endpoint: string): Promise<ApiResponse>;
    post(endpoint: string, body: any): Promise<ApiResponse>;
    patch(endpoint: string, body: any): Promise<ApiResponse>;
}
