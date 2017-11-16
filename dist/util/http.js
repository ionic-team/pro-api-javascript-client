"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("superagent");
exports.request = request;
const join = (...segs) => {
    return segs.join('/');
};
exports.join = join;
