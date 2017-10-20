import { BaseResource } from './base';

export class SubResource {
  base: BaseResource;

  constructor(base: BaseResource, public endpoint: string) {
    this.base = new BaseResource(base.endpoint, base.api);
  }

  del(basePk: string, pk: string): Promise<any> {
    this.base.endpoint = this.base.endpoint + '/' + basePk + this.endpoint;
    return this.base.del(pk);
  }

  get(basePk: string, pk: string): Promise<any> {
    this.base.endpoint = this.base.endpoint + '/' + basePk + this.endpoint;
    return this.base.get(pk);
  }

  list(basePk: string, params?: any): Promise<Array<any>> {
    this.base.endpoint = this.base.endpoint + '/' + basePk  + this.endpoint;
    return this.base.list(params);
  }

  patch(basePk: string, pk: string, body: any): Promise<any> {
    this.base.endpoint = this.base.endpoint + '/' + basePk + this.endpoint;
    return this.base.patch(pk, body);
  }

  post(basePk: string, body: any): Promise<any> {
    this.base.endpoint = this.base.endpoint + '/' + basePk + this.endpoint;
    return this.base.post(body);
  }
}
