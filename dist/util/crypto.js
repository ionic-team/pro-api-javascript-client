"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
const environment_1 = require("../environment");
function makeInternalToken(details, expire = 300) {
    let claims = {
        exp: Math.floor(Date.now() / 1000) + expire,
        iss: 'ionic.js.client',
        details: details
    };
    return jsonwebtoken_1.sign(claims, environment_1.SECRET);
}
exports.makeInternalToken = makeInternalToken;
