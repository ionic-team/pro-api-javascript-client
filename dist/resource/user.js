import { BaseResource } from './base';
var AppsResource = /** @class */ (function () {
    function AppsResource(api) {
        this._base = new BaseResource('/users', api);
    }
    AppsResource.prototype.del = function (pk) {
        return this._base.del(pk);
    };
    AppsResource.prototype.delToken = function (pk, tokenId) {
        return this._base.del(pk + '/tokens/' + tokenId);
    };
    AppsResource.prototype.get = function (pk) {
        return this._base.get(pk);
    };
    AppsResource.prototype.getDashMeta = function (pk) {
        return this._base.get(pk + '/dash-metadata');
    };
    AppsResource.prototype.list = function (params) {
        return this._base.list(params);
    };
    AppsResource.prototype.listTokens = function (pk) {
        return this._base.get(pk + '/tokens');
    };
    AppsResource.prototype.patch = function (pk, body) {
        return this._base.patch(pk, body);
    };
    AppsResource.prototype.post = function (body) {
        return this._base.post(body);
    };
    AppsResource.prototype.setDashMeta = function (pk, meta) {
        return this.patch(pk + '/dash-metadata', meta);
    };
    return AppsResource;
}());
export { AppsResource };
