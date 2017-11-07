"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseResource {
    constructor(endpoint, api) {
        this.endpoint = endpoint;
        this.api = api;
    }
    requestPromise(executor) {
        return new Promise(executor)
            .catch((e) => {
            console.error('Unable to perform request', e);
        });
    }
    del(pk, params, internal) {
        if (params) {
            pk += (pk.indexOf('?') === -1 ? '?' : '&') + Object.keys(params).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k])).join('&');
        }
        return new Promise((resolve, reject) => {
            this.api.del(this.endpoint + '/' + pk, internal).then((res) => {
                resolve(res.data);
            }, (err) => {
                reject(err.error || { "error": "Unknown" });
            });
        });
    }
    get(pk, params, internal) {
        if (params) {
            pk += (pk.indexOf('?') === -1 ? '?' : '&') + Object.keys(params).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k])).join('&');
        }
        return this.requestPromise((resolve, reject) => {
            this.api.get(this.endpoint + '/' + pk, internal).then((res) => {
                resolve(res.data);
            }, (err) => {
                reject(err.error || { "error": "Unknown" });
            });
        });
    }
    list(params, internal) {
        let queryString = '/';
        if (params) {
            queryString += (queryString.indexOf('?') === -1 ? '?' : '&') + Object.keys(params).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k])).join('&');
        }
        return this.requestPromise((resolve, reject) => {
            this.api.get(this.endpoint + queryString, internal).then((res) => {
                resolve(res.data);
            }, (err) => {
                reject(err.error || { "error": "Unknown" });
            });
        });
    }
    patch(pk, body, internal) {
        return this.requestPromise((resolve, reject) => {
            this.api.patch(this.endpoint + '/' + pk, body, internal).then((res) => {
                resolve(res.data);
            }, (err) => {
                reject(err.error || { "error": "Unknown" });
            });
        });
    }
    post(body, internal) {
        return this.requestPromise((resolve, reject) => {
            this.api.post(this.endpoint, body, internal).then((res) => {
                resolve(res.data);
            }, (err) => {
                reject(err.error || { "error": "Unknown" });
            });
        });
    }
}
exports.BaseResource = BaseResource;
