import { API_HOST } from './environment';
function _call(endpoint, config) {
    let callConfig = {
        method: config.method,
        headers: { "Content-type": "application/json" }
    };
    if (config.body) {
        callConfig.body = config.body;
    }
    return new Promise((resolve, reject) => {
        fetch(API_HOST + endpoint, callConfig).then((res) => {
            res.json().then((r) => {
                if (res.ok) {
                    resolve(r);
                }
                else {
                    reject(r);
                }
            }, (e) => {
                throw new Error(e);
            });
        }, (err) => {
            throw new Error(err);
        });
    });
}
export function del(endpoint) {
    return _call(endpoint, {
        method: 'delete'
    });
}
export function get(endpoint) {
    return _call(endpoint, {
        method: 'get'
    });
}
export function post(endpoint, body) {
    return _call(endpoint, {
        method: 'post',
        body: body
    });
}
export function patch(endpoint, body) {
    return _call(endpoint, {
        method: 'patch',
        body: body
    });
}
