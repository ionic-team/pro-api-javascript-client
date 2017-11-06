var BaseResource = /** @class */ (function () {
    function BaseResource(endpoint, api) {
        this.endpoint = endpoint;
        this.api = api;
    }
    BaseResource.prototype.del = function (pk, params, internal) {
        var _this = this;
        if (params) {
            pk += (pk.indexOf('?') === -1 ? '?' : '&') + Object.keys(params).map(function (k) { return encodeURIComponent(k) + '=' + encodeURIComponent(params[k]); }).join('&');
        }
        return new Promise(function (resolve, reject) {
            _this.api.del(_this.endpoint + '/' + pk, internal).then(function (res) {
                resolve(res.data);
            }, function (err) {
                reject(err.error || { "error": "Unknown" });
            });
        });
    };
    BaseResource.prototype.get = function (pk, params, internal) {
        var _this = this;
        if (params) {
            pk += (pk.indexOf('?') === -1 ? '?' : '&') + Object.keys(params).map(function (k) { return encodeURIComponent(k) + '=' + encodeURIComponent(params[k]); }).join('&');
        }
        return new Promise(function (resolve, reject) {
            _this.api.get(_this.endpoint + '/' + pk, internal).then(function (res) {
                resolve(res.data);
            }, function (err) {
                reject(err.error || { "error": "Unknown" });
            });
        });
    };
    BaseResource.prototype.list = function (params, internal) {
        var _this = this;
        var queryString = '/';
        if (params) {
            queryString += (queryString.indexOf('?') === -1 ? '?' : '&') + Object.keys(params).map(function (k) { return encodeURIComponent(k) + '=' + encodeURIComponent(params[k]); }).join('&');
        }
        return new Promise(function (resolve, reject) {
            _this.api.get(_this.endpoint + queryString, internal).then(function (res) {
                resolve(res.data);
            }, function (err) {
                reject(err.error || { "error": "Unknown" });
            });
        });
    };
    BaseResource.prototype.patch = function (pk, body, internal) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.api.patch(_this.endpoint + '/' + pk, body, internal).then(function (res) {
                resolve(res.data);
            }, function (err) {
                reject(err.error || { "error": "Unknown" });
            });
        });
    };
    BaseResource.prototype.post = function (body, internal) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.api.post(_this.endpoint, body, internal).then(function (res) {
                resolve(res.data);
            }, function (err) {
                reject(err.error || { "error": "Unknown" });
            });
        });
    };
    return BaseResource;
}());
export { BaseResource };
