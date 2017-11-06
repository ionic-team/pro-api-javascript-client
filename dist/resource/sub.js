"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class SubResource {
    constructor(base, endpoint) {
        this.endpoint = endpoint;
        this.base = new base_1.BaseResource(base.endpoint, base.api);
    }
    del(basePk, pk, params) {
        this.base.endpoint = this.base.endpoint + '/' + basePk + this.endpoint;
        return this.base.del(pk, params);
    }
    get(basePk, pk, params) {
        this.base.endpoint = this.base.endpoint + '/' + basePk + this.endpoint;
        return this.base.get(pk, params);
    }
    list(basePk, params) {
        this.base.endpoint = this.base.endpoint + '/' + basePk + this.endpoint;
        return this.base.list(params);
    }
    patch(basePk, pk, body) {
        this.base.endpoint = this.base.endpoint + '/' + basePk + this.endpoint;
        return this.base.patch(pk, body);
    }
    post(basePk, body) {
        this.base.endpoint = this.base.endpoint + '/' + basePk + this.endpoint;
        return this.base.post(body);
    }
}
exports.SubResource = SubResource;
