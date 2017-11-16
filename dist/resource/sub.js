"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class SubResource {
    constructor(base, endpoint) {
        this.endpoint = endpoint;
        this.base = new base_1.BaseResource(base.endpoint, base.api);
    }
    del(basePk, pk, params) {
        return this.base.del(pk, params, basePk + this.endpoint);
    }
    get(basePk, pk, params) {
        return this.base.get(pk, params, basePk + this.endpoint);
    }
    list(basePk, params) {
        return this.base.list(params, basePk + this.endpoint);
    }
    patch(basePk, pk, body) {
        return this.base.patch(pk, body, basePk + this.endpoint);
    }
    post(basePk, body) {
        return this.base.post(body, basePk + this.endpoint);
    }
}
exports.SubResource = SubResource;
