"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("./http");
exports.s3upload = (s3req, fileData) => __awaiter(this, void 0, void 0, function* () {
    let req = http_1.request('POST', s3req.url);
    try {
        req = req
            .buffer()
            .field(s3req.fields)
            .field('file', fileData)
            .end((err, res) => {
            if (err) {
                console.error('Unable to upload to S3');
                console.error(err);
                return Promise.reject(err);
            }
            if (res.status !== 204) {
                return Promise.reject(new Error(`Unexpected status code from AWS: ${res.status}`));
            }
            Promise.resolve();
        });
    }
    catch (e) {
        console.error('Error uploading');
        console.error(e);
    }
});
