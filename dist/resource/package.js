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
import { SubResource } from './sub';
var PackageResource = /** @class */ (function (_super) {
    __extends(PackageResource, _super);
    function PackageResource(base) {
        return _super.call(this, base, '/native-builds') || this;
    }
    PackageResource.prototype.del = function (appId, pk) { return _super.prototype.del.call(this, appId, pk); };
    PackageResource.prototype.download = function (appId, pk) { return _super.prototype.get.call(this, appId, pk + '/download'); };
    PackageResource.prototype.get = function (appId, pk) { return _super.prototype.get.call(this, appId, pk); };
    PackageResource.prototype.list = function (appId, params) { return _super.prototype.list.call(this, appId, params); };
    PackageResource.prototype.patch = function (appId, pk, body) { return _super.prototype.patch.call(this, appId, pk, body); };
    PackageResource.prototype.post = function (appId, body) { return _super.prototype.post.call(this, appId, body); };
    return PackageResource;
}(SubResource));
export { PackageResource };
