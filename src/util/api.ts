import { makeInternalToken } from './crypto';
import { Environment, SECRET }  from '../environment';
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

export interface InternalConfig {
  expire?: number;
  details?: any;
}

export class Api {
  host: string;
  apiToken: string = null;

  constructor(env: Environment) {
    if (env.host) {
      this.host = env.host;
    }
  }

  private async _call(endpoint: any, config: ApiCallConfig, internal?: InternalConfig): Promise<ApiResponse> {
    let req = request(config.method, this.host + endpoint);
    if (config.body) {
      req = req.send(config.body);
    }
    req = req.set("Content-type", "application/json")
    if (internal) {
      req = req.set("Authorization", "Bearer " + makeInternalToken(internal.details, internal.expire))
    } else if (this.apiToken) {
      req = req.set("Authorization", "Bearer " + this.apiToken)
    } else if (SECRET !== 'fake') {
      console.log("TODO");
    }

    try {
      const res = await req;

      if (res.ok) {
        return res.body;
      } else {
        throw res.body;
      }
    } catch(e) {
      if (e.response && e.response.body) {
        throw e.response.body;
      } else {
        throw e;
      }
    }
  }
  
  del(endpoint: string, internal?: InternalConfig): Promise<ApiResponse> {
    return this._call(endpoint, {
      method: 'delete'
    }, internal);
  }
  
  get(endpoint: string, internal?: InternalConfig): Promise<ApiResponse> {
    return this._call(endpoint, {
      method: 'get'
    }, internal);
  }
  
  post(endpoint: string, body: any, internal?: InternalConfig): Promise<ApiResponse> {
    return this._call(endpoint, {
      method: 'post',
      body: body
    }, internal);
  }
  
  patch(endpoint: string, body: any, internal?: InternalConfig): Promise<ApiResponse> {
    return this._call(endpoint, {
      method: 'patch',
      body: body
    }, internal);
  }
}
