var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { BaseResource } from './base';
var AppsResource = /** @class */ (function (_super) {
    __extends(AppsResource, _super);
    function AppsResource(api) {
        return _super.call(this, '/apps', api) || this;
    }
    AppsResource.prototype.del = function (pk, params) { return _super.prototype.del.call(this, pk, params); };
    AppsResource.prototype.get = function (pk) { return _super.prototype.get.call(this, pk); };
    AppsResource.prototype.list = function (params) { return _super.prototype.list.call(this, params); };
    AppsResource.prototype.patch = function (pk, body) { return _super.prototype.patch.call(this, pk, body); };
    AppsResource.prototype.post = function (body) { return _super.prototype.post.call(this, body); };
    AppsResource.prototype.getDashMeta = function (pk) { return _super.prototype.get.call(this, pk + '/dash-metadata'); };
    AppsResource.prototype.getFromSlug = function (slug) { return _super.prototype.get.call(this, '/slug/' + slug); };
    AppsResource.prototype.setDashMeta = function (pk, meta) { return _super.prototype.patch.call(this, pk + '/dash-metadata', meta); };
    AppsResource.prototype.transfer = function (pk, to) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.api.post(_this.endpoint + '/' + pk, to).then(function (res) {
                resolve(res.data);
            }, function (err) {
                reject(err.error || { "error": "Unknown" });
            });
        });
    };
    return AppsResource;
}(BaseResource));
export { AppsResource };
