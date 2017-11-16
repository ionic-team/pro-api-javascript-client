import { Api, ApiResponse, InternalConfig } from '../util/api'
import { join } from '../util/http';

export class BaseResource {

  constructor(public endpoint: string, public api: Api) {}

  requestPromise(executor: (resolve: Function, reject: Function) => void): Promise<any> {
    return new Promise(executor)
      .catch((e) => {
        console.error('Unable to perform request', e);
      });
  }

  del(pk: string, params?: any, path: string = '', internal?: InternalConfig): Promise<any> {
    if (params) {
      pk += (pk.indexOf('?') === -1 ? '?' : '&') + Object.keys(params).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k])).join('&');
    }
    return new Promise((resolve, reject) => {
      this.api.del(join(this.endpoint, path, pk), internal).then((res: ApiResponse) => {
        resolve(res.data);
      }, (err: ApiResponse) => {
        reject(err.error || {"error": "Unknown"});
      });
    });
  }

  get(pk: string, params?: any, path: string = '', internal?: InternalConfig): Promise<any> {
    if (params) {
      pk += (pk.indexOf('?') === -1 ? '?' : '&') + Object.keys(params).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k])).join('&');
    }

    return this.requestPromise((resolve, reject) => {
      this.api.get(join(this.endpoint, path, pk), internal).then((res: ApiResponse) => {
        resolve(res.data);
      }, (err: ApiResponse) => {
        reject(err.error || {"error": "Unknown"});
      });
    });
  }

  list(params?: any, path: string = '', internal?: InternalConfig): Promise<any> { 
    let queryString = '/';
    if (params) {
      queryString += (queryString.indexOf('?') === -1 ? '?' : '&') + Object.keys(params).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k])).join('&');
    }

    return this.requestPromise((resolve, reject) => {
      this.api.get(join(this.endpoint, path) +  queryString, internal).then((res: ApiResponse) => {
        resolve(res.data);
      }, (err: ApiResponse) => {
        reject(err.error || {"error": "Unknown"});
      });
    });
    }

  patch(pk: string, body: any, path: string = '', internal?: InternalConfig): Promise<any> {
    return this.requestPromise((resolve, reject) => {
      this.api.patch(join(this.endpoint, path, pk), body, internal).then((res: ApiResponse) => {
        resolve(res.data);
      }, (err: ApiResponse) => {
        reject(err.error || {"error": "Unknown"});
      });
    });
  }

  post(body: any, path: string = '', internal?: InternalConfig): Promise<any> { 
    return this.requestPromise((resolve, reject) => {
      this.api.post(join(this.endpoint, path), body, internal).then((res: ApiResponse) => {
        resolve(res.data);
      }, (err: ApiResponse) => {
        reject(err.error || {"error": "Unknown"});
      });
    });
  }
}