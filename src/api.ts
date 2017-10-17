import { API_HOST }  from './environment';

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

function _call(endpoint: any, config: ApiCallConfig): Promise<ApiResponse> {

  let callConfig: any = {
    method: config.method,
    headers: {"Content-type": "application/json"}
  }

  if (config.body) {
    callConfig.body = JSON.stringify(config.body);
  }

  return new Promise((resolve, reject) => {
    fetch(API_HOST + endpoint, callConfig).then((res: any) => {
      res.json().then((r: ApiResponse) => {
        if (res.ok) {
          resolve(r);
        } else {
          reject(r);
        }
      }, (e: any) => {
        throw new Error(e);
      });
    }, (err: any) => {
      throw new Error(err);
    })
  })
}

export function del(endpoint: string): Promise<ApiResponse> {
  return _call(endpoint, {
    method: 'delete'
  });
}

export function get(endpoint: string): Promise<ApiResponse> {
  return _call(endpoint, {
    method: 'get'
  });
}

export function post(endpoint: string, body: any): Promise<ApiResponse> {
  return _call(endpoint, {
    method: 'post',
    body: body
  });
}

export function patch(endpoint: string, body: any): Promise<ApiResponse> {
  return _call(endpoint, {
    method: 'patch',
    body: body
  });
}
