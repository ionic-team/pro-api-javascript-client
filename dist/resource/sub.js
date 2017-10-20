import { BaseResource } from './base';
var SubResource = /** @class */ (function () {
    function SubResource(base, endpoint) {
        this.endpoint = endpoint;
        this.base = new BaseResource(base.endpoint, base.api);
    }
    SubResource.prototype.del = function (basePk, pk, params) {
        this.base.endpoint = this.base.endpoint + '/' + basePk + this.endpoint;
        return this.base.del(pk, params);
    };
    SubResource.prototype.get = function (basePk, pk, params) {
        this.base.endpoint = this.base.endpoint + '/' + basePk + this.endpoint;
        return this.base.get(pk, params);
    };
    SubResource.prototype.list = function (basePk, params) {
        this.base.endpoint = this.base.endpoint + '/' + basePk + this.endpoint;
        return this.base.list(params);
    };
    SubResource.prototype.patch = function (basePk, pk, body) {
        this.base.endpoint = this.base.endpoint + '/' + basePk + this.endpoint;
        return this.base.patch(pk, body);
    };
    SubResource.prototype.post = function (basePk, body) {
        this.base.endpoint = this.base.endpoint + '/' + basePk + this.endpoint;
        return this.base.post(body);
    };
    return SubResource;
}());
export { SubResource };
