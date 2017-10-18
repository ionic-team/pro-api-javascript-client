import { Environment }  from '../environment';

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

export class Api {
  host: string;
  apiToken: string = null;

  constructor(env: Environment) {
    if (env.host) {
      this.host = env.host;
    }
  }

  private _call(endpoint: any, config: ApiCallConfig): Promise<ApiResponse> {
    let callConfig: any = {
      method: config.method,
      headers: {"Content-type": "application/json"}
    }
  
    if (config.body) {
      callConfig.body = JSON.stringify(config.body);
    }

    if (this.apiToken) {
      callConfig.headers = {
        "Content-type": "application/json",
        "Authorization": "Bearer " + this.apiToken
      }
    }
  
    return new Promise((resolve, reject) => {
      fetch(this.host + endpoint, callConfig).then((res: any) => {
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
  
  del(endpoint: string): Promise<ApiResponse> {
    return this._call(endpoint, {
      method: 'delete'
    });
  }
  
  get(endpoint: string): Promise<ApiResponse> {
    return this._call(endpoint, {
      method: 'get'
    });
  }
  
  post(endpoint: string, body: any): Promise<ApiResponse> {
    return this._call(endpoint, {
      method: 'post',
      body: body
    });
  }
  
  patch(endpoint: string, body: any): Promise<ApiResponse> {
    return this._call(endpoint, {
      method: 'patch',
      body: body
    });
  }
}
