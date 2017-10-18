import { BaseResource } from './base';
export class SnapshotsResource {
    constructor(api) {
        this._base = new BaseResource('/apps/', api);
    }
    del(appId, pk, params) {
        this._base.endpoint = '/apps/' + appId + '/snapshots';
        return this._base.del(pk, params);
    }
    get(appId, pk, params) {
        this._base.endpoint = '/apps/' + appId + '/snapshots';
        return this._base.get(pk, params);
    }
    list(appId, params) {
        this._base.endpoint = '/apps/' + appId + '/snapshots';
        return this._base.list(params);
    }
    patch(appId, pk, body) {
        this._base.endpoint = '/apps/' + appId + '/snapshots';
        return this._base.patch(pk, body);
    }
    post(appId, body) {
        this._base.endpoint = '/apps/' + appId + '/snapshots';
        return this._base.post(body);
    }
}
