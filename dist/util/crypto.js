import { sign } from 'jsonwebtoken';
import { SECRET } from '../environment';
export function makeInternalToken(details, expire) {
    if (expire === void 0) { expire = 300; }
    var claims = {
        exp: Math.floor(Date.now() / 1000) + expire,
        iss: 'ionic.js.client',
        details: details
    };
    return sign(claims, SECRET);
}
