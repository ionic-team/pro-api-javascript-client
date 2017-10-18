import { BaseResource } from './base';
var UserResource = /** @class */ (function () {
    function UserResource(api) {
        this._base = new BaseResource('/users', api);
    }
    UserResource.prototype.del = function (pk) {
        return this._base.del(pk);
    };
    UserResource.prototype.delToken = function (pk, tokenId) {
        return this._base.del(pk + '/tokens/' + tokenId);
    };
    UserResource.prototype.get = function (pk) {
        return this._base.get(pk);
    };
    UserResource.prototype.getDashMeta = function (pk) {
        return this._base.get(pk + '/dash-metadata');
    };
    UserResource.prototype.listTokens = function (pk) {
        return this._base.get(pk + '/tokens');
    };
    UserResource.prototype.patch = function (pk, body) {
        return this._base.patch(pk, body);
    };
    UserResource.prototype.post = function (body) {
        return this._base.post(body);
    };
    UserResource.prototype.setDashMeta = function (pk, meta) {
        return this.patch(pk + '/dash-metadata', meta);
    };
    return UserResource;
}());
export { UserResource };
