"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sub_1 = require("./sub");
class PackageResource extends sub_1.SubResource {
    constructor(base) { super(base, '/native-builds'); }
    del(appId, pk) { return super.del(appId, pk); }
    download(appId, pk) { return super.get(appId, pk + '/download'); }
    get(appId, pk) { return super.get(appId, pk); }
    list(appId, params) { return super.list(appId, params); }
    patch(appId, pk, body) { return super.patch(appId, pk, body); }
    post(appId, body) { return super.post(appId, body); }
}
exports.PackageResource = PackageResource;
