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
const crypto_1 = require("./crypto");
const environment_1 = require("../environment");
const request = require("superagent");
class Api {
    constructor(env) {
        this.apiToken = null;
        if (env.host) {
            this.host = env.host;
        }
    }
    setToken(token) {
        this.apiToken = token;
    }
    getToken() {
        return this.apiToken;
    }
    _call(endpoint, config, internal) {
        return __awaiter(this, void 0, void 0, function* () {
            let req = request(config.method, this.host + endpoint);
            if (config.body) {
                req = req.send(config.body);
            }
            req = req.set("Content-type", "application/json");
            if (internal) {
                req = req.set("Authorization", "Bearer " + crypto_1.makeInternalToken(internal.details, internal.expire));
            }
            else if (this.apiToken) {
                req = req.set("Authorization", "Bearer " + this.apiToken);
            }
            else if (environment_1.SECRET !== 'fake') {
                console.log("TODO");
            }
            try {
                const res = yield req;
                if (res.ok) {
                    return res.body;
                }
                else {
                    throw res.body;
                }
            }
            catch (e) {
                if (e.response && e.response.body) {
                    throw e.response.body;
                }
                else {
                    throw e;
                }
            }
        });
    }
    del(endpoint, internal) {
        return this._call(endpoint, {
            method: 'delete'
        }, internal);
    }
    get(endpoint, internal) {
        return this._call(endpoint, {
            method: 'get'
        }, internal);
    }
    post(endpoint, body, internal) {
        return this._call(endpoint, {
            method: 'post',
            body: body
        }, internal);
    }
    patch(endpoint, body, internal) {
        return this._call(endpoint, {
            method: 'patch',
            body: body
        }, internal);
    }
}
exports.Api = Api;
