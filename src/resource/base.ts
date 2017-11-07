import { Api, ApiResponse, InternalConfig } from '../util/api'

export class BaseResource {

  constructor(public endpoint: string, public api: Api) {}

  requestPromise(executor: (resolve: Function, reject: Function) => void): Promise<any> {
    return new Promise(executor)
      .catch((e) => {
        console.error('Unable to perform request', e);
      });
  }

  del(pk: string, params?: any, internal?: InternalConfig): Promise<any> {
    if (params) {
      pk += (pk.indexOf('?') === -1 ? '?' : '&') + Object.keys(params).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k])).join('&');
    }
    return new Promise((resolve, reject) => {
      this.api.del(this.endpoint + '/' + pk, internal).then((res: ApiResponse) => {
        resolve(res.data);
      }, (err: ApiResponse) => {
        reject(err.error || {"error": "Unknown"});
      });
    });
  }

  get(pk: string, params?: any, internal?: InternalConfig): Promise<any> {
    if (params) {
      pk += (pk.indexOf('?') === -1 ? '?' : '&') + Object.keys(params).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k])).join('&');
    }

    return this.requestPromise((resolve, reject) => {
      this.api.get(this.endpoint + '/' + pk, internal).then((res: ApiResponse) => {
        resolve(res.data);
      }, (err: ApiResponse) => {
        reject(err.error || {"error": "Unknown"});
      });
    });
  }

  list(params?: any, internal?: InternalConfig): Promise<any> { 
    let queryString = '/';
    if (params) {
      queryString += (queryString.indexOf('?') === -1 ? '?' : '&') + Object.keys(params).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k])).join('&');
    }

    return this.requestPromise((resolve, reject) => {
      this.api.get(this.endpoint + queryString, internal).then((res: ApiResponse) => {
        resolve(res.data);
      }, (err: ApiResponse) => {
        reject(err.error || {"error": "Unknown"});
      });
    });
    }

  patch(pk: string, body: any, internal?: InternalConfig): Promise<any> {
    return this.requestPromise((resolve, reject) => {
      this.api.patch(this.endpoint + '/' + pk, body, internal).then((res: ApiResponse) => {
        resolve(res.data);
      }, (err: ApiResponse) => {
        reject(err.error || {"error": "Unknown"});
      });
    });
  }

  post(body: any, internal?: InternalConfig): Promise<any> { 
    return this.requestPromise((resolve, reject) => {
      this.api.post(this.endpoint, body, internal).then((res: ApiResponse) => {
        resolve(res.data);
      }, (err: ApiResponse) => {
        reject(err.error || {"error": "Unknown"});
      });
    });
  }
}