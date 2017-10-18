import { Api } from '../util/api'

export class BaseResource {

    constructor(public endpoint: string, public api: Api) {}

    del(pk: string) { return this.api.del(this.endpoint + pk); }

    get(pk: string) { return this.api.get(this.endpoint + pk); }

    list() { return this.api.get(this.endpoint); }

    patch(pk: string, body: any) {return this.api.patch(this.endpoint + pk, body); }

    post(body: any) { return this.api.post(this.endpoint, body); }
}