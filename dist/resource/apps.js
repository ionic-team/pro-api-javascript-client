import { BaseResource } from './base';
export class AppsResource extends BaseResource {
    constructor(api) { super('/apps', api); }
    getDashMeta(pk) {
        return this.get(pk + '/dash-metadata');
    }
    getFromSlug(slug) {
        return this.get('/slug/' + slug);
    }
    setDashMeta(pk, meta) {
        return this.patch(pk + '/dash-metadata', meta);
    }
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
