"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sub_1 = require("./sub");
const s3_1 = require("../util/s3");
class MonitoringResource extends sub_1.SubResource {
    constructor(base) { super(base, '/monitoring'); }
    createSourcemap(appId, body) { return super.post(appId + '/sourcemaps', body); }
    uploadSourcemap(body, fileData) { return s3_1.s3upload(body.fields, fileData); }
}
exports.MonitoringResource = MonitoringResource;
