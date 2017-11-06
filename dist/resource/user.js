"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class UserResource extends base_1.BaseResource {
    constructor(api) { super('/users', api); }
    del(pk) { return super.del(pk); }
    delToken(pk, tokenId) { return super.del(pk + '/tokens/' + tokenId); }
    get(pk) { return super.get(pk); }
    getDashMeta(pk) { return super.get(pk + '/dash-metadata'); }
    listTokens(pk) { return super.get(pk + '/tokens'); }
    patch(pk, body) { return super.patch(pk, body); }
    post(body) { return super.post(body); }
    setDashMeta(pk, meta) { return super.patch(pk + '/dash-metadata', meta); }
}
exports.UserResource = UserResource;
