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
var UserResource = /** @class */ (function (_super) {
    __extends(UserResource, _super);
    function UserResource(api) {
        return _super.call(this, '/users', api) || this;
    }
    UserResource.prototype.del = function (pk) { return _super.prototype.del.call(this, pk); };
    UserResource.prototype.delToken = function (pk, tokenId) { return _super.prototype.del.call(this, pk + '/tokens/' + tokenId); };
    UserResource.prototype.get = function (pk) { return _super.prototype.get.call(this, pk); };
    UserResource.prototype.getDashMeta = function (pk) { return _super.prototype.get.call(this, pk + '/dash-metadata'); };
    UserResource.prototype.listTokens = function (pk) { return _super.prototype.get.call(this, pk + '/tokens'); };
    UserResource.prototype.patch = function (pk, body) { return _super.prototype.patch.call(this, pk, body); };
    UserResource.prototype.post = function (body) { return _super.prototype.post.call(this, body); };
    UserResource.prototype.setDashMeta = function (pk, meta) { return _super.prototype.patch.call(this, pk + '/dash-metadata', meta); };
    return UserResource;
}(BaseResource));
export { UserResource };
