import { BaseResource } from './base';
export class AppsResource {
    constructor(api) {
        this._base = new BaseResource('/apps', api);
    }
    del(pk, params) {
        return this._base.del(pk, params);
    }
    get(pk) {
        return this._base.get(pk);
    }
    list(params) {
        return this._base.list(params);
    }
    patch(pk, body) {
        return this._base.patch(pk, body);
    }
    post(body) {
        return this._base.post(body);
    }
    getDashMeta(pk) {
        return this.get(pk + '/dash-metadata');
    }
    getFromSlug(slug) {
        return this.get('/slug/' + slug);
    }
    setDashMeta(pk, meta) {
        return this._base.patch(pk + '/dash-metadata', meta);
    }
    transfer(pk, to) {
        return new Promise((resolve, reject) => {
            this._base.api.post(this._base.endpoint + '/' + pk, to).then((res) => {
                resolve(res.data);
            }, (err) => {
                reject(err.error || { "error": "Unknown" });
            });
        });
    }
}
