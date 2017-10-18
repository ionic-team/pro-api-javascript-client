var Api = /** @class */ (function () {
    function Api(env) {
        this.apiToken = null;
        if (env.host) {
            this.host = env.host;
        }
    }
    Api.prototype._call = function (endpoint, config) {
        var _this = this;
        var callConfig = {
            method: config.method,
            headers: { "Content-type": "application/json" }
        };
        if (config.body) {
            callConfig.body = JSON.stringify(config.body);
        }
        if (this.apiToken) {
            callConfig.headers = {
                "Content-type": "application/json",
                "Authorization": "Bearer " + this.apiToken
            };
        }
        return new Promise(function (resolve, reject) {
            fetch(_this.host + endpoint, callConfig).then(function (res) {
                res.json().then(function (r) {
                    if (res.ok) {
                        resolve(r);
                    }
                    else {
                        reject(r);
                    }
                }, function (e) {
                    throw new Error(e);
                });
            }, function (err) {
                throw new Error(err);
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
