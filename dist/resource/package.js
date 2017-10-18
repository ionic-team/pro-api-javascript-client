import { BaseResource } from './base';
var PackageResource = /** @class */ (function () {
    function PackageResource(api) {
        this._base = new BaseResource('/apps/', api);
    }
    PackageResource.prototype.del = function (appId, pk) {
        this._base.endpoint = '/apps/' + appId + '/native-builds';
        return this._base.del(pk);
    };
    PackageResource.prototype.download = function (appId, pk) {
        this._base.endpoint = '/apps/' + appId + '/native-builds';
        return this._base.get(pk + '/download');
    };
    PackageResource.prototype.get = function (appId, pk) {
        this._base.endpoint = '/apps/' + appId + '/native-builds';
        return this._base.get(pk);
    };
    PackageResource.prototype.list = function (appId, params) {
        this._base.endpoint = '/apps/' + appId + '/native-builds';
        return this._base.list(params);
    };
    PackageResource.prototype.patch = function (appId, pk, body) {
        this._base.endpoint = '/apps/' + appId + '/native-builds';
        return this._base.patch(pk, body);
    };
    PackageResource.prototype.post = function (appId, body) {
        this._base.endpoint = '/apps/' + appId + '/native-builds';
        return this._base.post(body);
    };
    return PackageResource;
}());
export { PackageResource };
