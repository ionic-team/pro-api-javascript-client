var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import * as request from 'superagent';
var Api = /** @class */ (function () {
    function Api(env) {
        this.apiToken = null;
        if (env.host) {
            this.host = env.host;
        }
    }
    Api.prototype._call = function (endpoint, config) {
        return __awaiter(this, void 0, void 0, function () {
            var req, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        req = request(config.method, this.host + endpoint);
                        if (config.body) {
                            req = req.send(config.body);
                        }
                        req = req.set("Content-type", "application/json");
                        if (this.apiToken) {
                            req = req.set("Authorization", "Bearer " + this.apiToken);
                        }
                        return [4 /*yield*/, req];
                    case 1:
                        res = _a.sent();
                        if (res.ok) {
                            return [2 /*return*/, res.body];
                        }
                        else {
                            throw res.body;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Api.prototype.del = function (endpoint) {
        return this._call(endpoint, {
            method: 'delete'
        });
    };
    Api.prototype.get = function (endpoint) {
        return this._call(endpoint, {
            method: 'get'
        });
    };
    Api.prototype.post = function (endpoint, body) {
        return this._call(endpoint, {
            method: 'post',
            body: body
        });
    };
    Api.prototype.patch = function (endpoint, body) {
        return this._call(endpoint, {
            method: 'patch',
            body: body
        });
    };
    return Api;
}());
export { Api };
