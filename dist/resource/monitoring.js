"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class MonitoringResource extends base_1.BaseResource {
    constructor(api) { super('/monitoring', api); }
}
exports.MonitoringResource = MonitoringResource;
