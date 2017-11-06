"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class AppsResource extends base_1.BaseResource {
    constructor(api) { super('/apps', api); }
    del(pk, params) { return super.del(pk, params); }
    get(pk) { return super.get(pk); }
    list(params) { return super.list(params); }
    patch(pk, body) { return super.patch(pk, body); }
    post(body) { return super.post(body); }
    getDashMeta(pk) { return super.get(pk + '/dash-metadata'); }
    getFromSlug(slug) { return super.get('/slug/' + slug); }
    setDashMeta(pk, meta) { return super.patch(pk + '/dash-metadata', meta); }
    transfer(pk, to) {
        return new Promise((resolve, reject) => {
            this.api.post(this.endpoint + '/' + pk, to).then((res) => {
                resolve(res.data);
            }, (err) => {
                reject(err.error || { "error": "Unknown" });
            });
        });
    }
}
exports.AppsResource = AppsResource;
