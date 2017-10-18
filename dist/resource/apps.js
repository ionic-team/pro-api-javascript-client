import { BaseResource } from './base';
var AppsResource = /** @class */ (function () {
    function AppsResource(api) {
        this._base = new BaseResource('/apps', api);
    }
    AppsResource.prototype.del = function (pk, params) {
        return this._base.del(pk, params);
    };
    AppsResource.prototype.get = function (pk) {
        return this._base.get(pk);
    };
    AppsResource.prototype.list = function (params) {
        return this._base.list(params);
    };
    AppsResource.prototype.patch = function (pk, body) {
        return this._base.patch(pk, body);
    };
    AppsResource.prototype.post = function (body) {
        return this._base.post(body);
    };
    AppsResource.prototype.getDashMeta = function (pk) {
        return this.get(pk + '/dash-metadata');
    };
    AppsResource.prototype.getFromSlug = function (slug) {
        return this.get('/slug/' + slug);
    };
    AppsResource.prototype.setDashMeta = function (pk, meta) {
        return this._base.patch(pk + '/dash-metadata', meta);
    };
    AppsResource.prototype.transfer = function (pk, to) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._base.api.post(_this._base.endpoint + '/' + pk, to).then(function (res) {
                resolve(res.data);
            }, function (err) {
                reject(err.error || { "error": "Unknown" });
            });
        });
    };
    return AppsResource;
}());
export { AppsResource };
