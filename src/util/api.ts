import { Environment }  from '../environment';
import * as request from 'superagent'

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

  private async _call(endpoint: any, config: ApiCallConfig): Promise<ApiResponse> {
    let req = request(config.method, this.host + endpoint);
    if (config.body) {
      req = req.send(config.body);
    }
    req = req.set("Content-type", "application/json")
    if (this.apiToken) {
      req = req.set("Authorization", "Bearer " + this.apiToken)
    }

    const res = await req;

    if (res.ok) {
      return res.body;
    } else {
      throw res.body;
    }
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
