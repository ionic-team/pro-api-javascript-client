"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sub_1 = require("./sub");
class SnapshotsResource extends sub_1.SubResource {
    constructor(base) { super(base, '/snapshots'); }
    del(appId, pk) { return super.del(appId, pk); }
    get(appId, pk) { return super.get(appId, pk); }
    getUrl(appId, pk) { return super.get(appId, pk + '/get-url'); }
    list(appId, params) { return super.list(appId, params); }
    patch(appId, pk, body) { return super.patch(appId, pk, body); }
    post(appId, body) { return super.post(appId, body); }
}
exports.SnapshotsResource = SnapshotsResource;
