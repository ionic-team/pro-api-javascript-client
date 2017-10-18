var BaseResource = /** @class */ (function () {
    function BaseResource(endpoint, api) {
        this.endpoint = endpoint;
        this.api = api;
    }
    BaseResource.prototype.del = function (pk, params) {
        var _this = this;
        if (params) {
            pk += (pk.indexOf('?') === -1 ? '?' : '&') + Object.keys(params).map(function (k) { return encodeURIComponent(k) + '=' + encodeURIComponent(params[k]); }).join('&');
        }
        return new Promise(function (resolve, reject) {
            _this.api.del(_this.endpoint + '/' + pk).then(function (res) {
                resolve(res.data);
            }, function (err) {
                reject(err.error || { "error": "Unknown" });
            });
        });
    };
    BaseResource.prototype.get = function (pk, params) {
        var _this = this;
        if (params) {
            pk += (pk.indexOf('?') === -1 ? '?' : '&') + Object.keys(params).map(function (k) { return encodeURIComponent(k) + '=' + encodeURIComponent(params[k]); }).join('&');
        }
        return new Promise(function (resolve, reject) {
            _this.api.get(_this.endpoint + '/' + pk).then(function (res) {
                resolve(res.data);
            }, function (err) {
                reject(err.error || { "error": "Unknown" });
            });
        });
    };
    BaseResource.prototype.list = function (params) {
        var _this = this;
        var queryString = '/';
        if (params) {
            queryString += (queryString.indexOf('?') === -1 ? '?' : '&') + Object.keys(params).map(function (k) { return encodeURIComponent(k) + '=' + encodeURIComponent(params[k]); }).join('&');
        }
        return new Promise(function (resolve, reject) {
            _this.api.get(_this.endpoint + queryString).then(function (res) {
                resolve(res.data);
            }, function (err) {
                reject(err.error || { "error": "Unknown" });
            });
        });
    };
    BaseResource.prototype.patch = function (pk, body) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.api.patch(_this.endpoint + '/' + pk, body).then(function (res) {
                resolve(res.data);
            }, function (err) {
                reject(err.error || { "error": "Unknown" });
            });
        });
    };
    BaseResource.prototype.post = function (body) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.api.post(_this.endpoint, body).then(function (res) {
                resolve(res.data);
            }, function (err) {
                reject(err.error || { "error": "Unknown" });
            });
        });
    };
    return BaseResource;
}());
export { BaseResource };
