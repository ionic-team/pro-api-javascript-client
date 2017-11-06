"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Internal use only
let secret = 'fake';
if (process && process.env) {
    secret = process.env.SECRET || 'fake';
}
exports.SECRET = secret;
