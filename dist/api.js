export class Api {
    constructor(env) {
        this.apiToken = null;
        if (env.host) {
            this.host = env.host;
        }
    }
    _call(endpoint, config) {
        let callConfig = {
            method: config.method,
            headers: { "Content-type": "application/json" }
        };
        if (config.body) {
            callConfig.body = JSON.stringify(config.body);
        }
        return new Promise((resolve, reject) => {
            fetch(this.host + endpoint, callConfig).then((res) => {
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
    del(endpoint) {
        return this._call(endpoint, {
            method: 'delete'
        });
    }
    get(endpoint) {
        return this._call(endpoint, {
            method: 'get'
        });
    }
    post(endpoint, body) {
        return this._call(endpoint, {
            method: 'post',
            body: body
        });
    }
    patch(endpoint, body) {
        return this._call(endpoint, {
            method: 'patch',
            body: body
        });
    }
}
