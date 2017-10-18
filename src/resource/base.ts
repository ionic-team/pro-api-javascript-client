import { Api, ApiResponse } from '../util/api'

export class BaseResource {

    constructor(public endpoint: string, public api: Api) {}

    del(pk: string) {
      return new Promise((resolve, reject) => {
        this.api.del(this.endpoint + pk).then((res: ApiResponse) => {
          resolve(res.data);
        }, (err: ApiResponse) => {
          reject(err.error || {"error": "Unknown"});
        });
      });
    }

    get(pk: string) { 
      return new Promise((resolve, reject) => {
        this.api.get(this.endpoint + pk).then((res: ApiResponse) => {
          resolve(res.data);
        }, (err: ApiResponse) => {
          reject(err.error || {"error": "Unknown"});
        });
      });
    }

    list() { 
      return new Promise((resolve, reject) => {
        this.api.get(this.endpoint).then((res: ApiResponse) => {
          resolve(res.data);
        }, (err: ApiResponse) => {
          reject(err.error || {"error": "Unknown"});
        });
      });
     }

    patch(pk: string, body: any) {
      return new Promise((resolve, reject) => {
        this.api.patch(this.endpoint + pk, body).then((res: ApiResponse) => {
          resolve(res.data);
        }, (err: ApiResponse) => {
          reject(err.error || {"error": "Unknown"});
        });
      });
    }

    post(body: any) { 
      return new Promise((resolve, reject) => {
        this.api.post(this.endpoint, body).then((res: ApiResponse) => {
          resolve(res.data);
        }, (err: ApiResponse) => {
          reject(err.error || {"error": "Unknown"});
        });
      });
    }
}