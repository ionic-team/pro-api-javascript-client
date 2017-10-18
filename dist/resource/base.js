export class BaseResource {
    constructor(endpoint, api) {
        this.endpoint = endpoint;
        this.api = api;
    }
    del(pk) { return this.api.del(this.endpoint + pk); }
    get(pk) { return this.api.get(this.endpoint + pk); }
    list() { return this.api.get(this.endpoint); }
    patch(pk, body) { return this.api.patch(this.endpoint + pk, body); }
    post(body) { return this.api.post(this.endpoint, body); }
}
