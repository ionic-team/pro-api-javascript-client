import { sign } from 'jsonwebtoken';
import { SECRET } from '../environment';

export function makeInternalToken(details: any, expire: number = 300) {
  let claims = {
    exp: Math.floor(Date.now() / 1000) + expire,
    iss: 'ionic.js.client',
    details: details
  }
  return sign(claims, SECRET);
}