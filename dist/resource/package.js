import { BaseResource } from './base';
export class PackageResource {
    constructor(api) {
        this._base = new BaseResource('/apps/', api);
    }
    del(appId, pk) {
        this._base.endpoint = '/apps/' + appId + '/native-builds';
        return this._base.del(pk);
    }
    download(appId, pk) {
        this._base.endpoint = '/apps/' + appId + '/native-builds';
        return this._base.get(pk + '/download');
    }
    get(appId, pk) {
        this._base.endpoint = '/apps/' + appId + '/native-builds';
        return this._base.get(pk);
    }
    list(appId, params) {
        this._base.endpoint = '/apps/' + appId + '/native-builds';
        return this._base.list(params);
    }
    patch(appId, pk, body) {
        this._base.endpoint = '/apps/' + appId + '/native-builds';
        return this._base.patch(pk, body);
    }
    post(appId, body) {
        this._base.endpoint = '/apps/' + appId + '/native-builds';
        return this._base.post(body);
    }
}
