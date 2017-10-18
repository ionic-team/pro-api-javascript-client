import { BaseResource } from './base';
export class SnapshotsResource {
    constructor(api) {
        this._base = new BaseResource('/apps/', api);
    }
    del(appId, pk, params) {
        return this._base.del(appId + '/snapshots/' + pk, params);
    }
    get(appId, pk, params) {
        return this._base.get(appId + '/snapshots/' + pk, params);
    }
    list(appId, params) {
        let queryString = appId + '/snapshots';
        if (params) {
            queryString += (queryString.indexOf('?') === -1 ? '?' : '&') + Object.keys(params).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k])).join('&');
        }
        return new Promise((resolve, reject) => {
            this._base.api.get(this._base.endpoint + queryString).then((res) => {
                resolve(res.data);
            }, (err) => {
                reject(err.error || { "error": "Unknown" });
            });
        });
    }
    patch(appId, pk, body) {
        return this._base.patch(appId + '/snapshots/' + pk, body);
    }
    post(appId, body) {
        return new Promise((resolve, reject) => {
            this._base.api.post(this._base.endpoint + appId + '/snapshots', body).then((res) => {
                resolve(res.data);
            }, (err) => {
                reject(err.error || { "error": "Unknown" });
            });
        });
    }
}
