import { BaseResource } from './base';

export class SubResource {
  base: BaseResource;

  constructor(base: BaseResource, public endpoint: string) {
    this.base = new BaseResource(base.endpoint, base.api);
  }

  del(basePk: string, pk: string, params?: any): Promise<any> {
    return this.base.del(pk, params, basePk + this.endpoint);
  }

  get(basePk: string, pk: string, params?: any): Promise<any> {
    return this.base.get(pk, params, basePk + this.endpoint);
  }

  list(basePk: string, params?: any): Promise<Array<any>> {
    return this.base.list(params, basePk  + this.endpoint);
  }

  patch(basePk: string, pk: string, body: any): Promise<any> {
    return this.base.patch(pk, body, basePk + this.endpoint);
  }

  post(basePk: string, body: any): Promise<any> {
    return this.base.post(body, basePk + this.endpoint);
  }
}
