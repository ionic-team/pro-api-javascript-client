"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("../util/http");
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
    del(pk, params, path = '', internal) {
        if (params) {
            pk += (pk.indexOf('?') === -1 ? '?' : '&') + Object.keys(params).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k])).join('&');
        }
        return new Promise((resolve, reject) => {
            this.api.del(http_1.join(this.endpoint, path, pk), internal).then((res) => {
                resolve(res.data);
            }, (err) => {
                reject(err.error || { "error": "Unknown" });
            });
        });
    }
    get(pk, params, path = '', internal) {
        if (params) {
            pk += (pk.indexOf('?') === -1 ? '?' : '&') + Object.keys(params).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k])).join('&');
        }
        return this.requestPromise((resolve, reject) => {
            this.api.get(http_1.join(this.endpoint, path, pk), internal).then((res) => {
                resolve(res.data);
            }, (err) => {
                reject(err.error || { "error": "Unknown" });
            });
        });
    }
    list(params, path = '', internal) {
        let queryString = '/';
        if (params) {
            queryString += (queryString.indexOf('?') === -1 ? '?' : '&') + Object.keys(params).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k])).join('&');
        }
        return this.requestPromise((resolve, reject) => {
            this.api.get(http_1.join(this.endpoint, path) + queryString, internal).then((res) => {
                resolve(res.data);
            }, (err) => {
                reject(err.error || { "error": "Unknown" });
            });
        });
    }
    patch(pk, body, path = '', internal) {
        return this.requestPromise((resolve, reject) => {
            this.api.patch(http_1.join(this.endpoint, path, pk), body, internal).then((res) => {
                resolve(res.data);
            }, (err) => {
                reject(err.error || { "error": "Unknown" });
            });
        });
    }
    post(body, path = '', internal) {
        return this.requestPromise((resolve, reject) => {
            this.api.post(http_1.join(this.endpoint, path), body, internal).then((res) => {
                resolve(res.data);
            }, (err) => {
                reject(err.error || { "error": "Unknown" });
            });
        });
    }
}
exports.BaseResource = BaseResource;
