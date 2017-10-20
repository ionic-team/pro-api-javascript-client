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
var SnapshotsResource = /** @class */ (function (_super) {
    __extends(SnapshotsResource, _super);
    function SnapshotsResource(base) {
        return _super.call(this, base, '/snapshots') || this;
    }
    SnapshotsResource.prototype.del = function (appId, pk) { return _super.prototype.del.call(this, appId, pk); };
    SnapshotsResource.prototype.get = function (appId, pk) { return _super.prototype.get.call(this, appId, pk); };
    SnapshotsResource.prototype.getUrl = function (appId, pk) { return _super.prototype.get.call(this, appId, pk + '/get-url'); };
    SnapshotsResource.prototype.list = function (appId, params) { return _super.prototype.list.call(this, appId, params); };
    SnapshotsResource.prototype.patch = function (appId, pk, body) { return _super.prototype.patch.call(this, appId, pk, body); };
    SnapshotsResource.prototype.post = function (appId, body) { return _super.prototype.post.call(this, appId, body); };
    return SnapshotsResource;
}(SubResource));
export { SnapshotsResource };
