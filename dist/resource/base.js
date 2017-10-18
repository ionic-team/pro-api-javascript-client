export class BaseResource {
    constructor(endpoint, api) {
        this.endpoint = endpoint;
        this.api = api;
    }
    del(pk) {
        return new Promise((resolve, reject) => {
            this.api.del(this.endpoint + '/' + pk).then((res) => {
                resolve(res.data);
            }, (err) => {
                reject(err.error || { "error": "Unknown" });
            });
        });
    }
    get(pk) {
        return new Promise((resolve, reject) => {
            this.api.get(this.endpoint + '/' + pk).then((res) => {
                resolve(res.data);
            }, (err) => {
                reject(err.error || { "error": "Unknown" });
            });
        });
    }
    list() {
        return new Promise((resolve, reject) => {
            this.api.get(this.endpoint).then((res) => {
                resolve(res.data);
            }, (err) => {
                reject(err.error || { "error": "Unknown" });
            });
        });
    }
    patch(pk, body) {
        return new Promise((resolve, reject) => {
            this.api.patch(this.endpoint + '/' + pk, body).then((res) => {
                resolve(res.data);
            }, (err) => {
                reject(err.error || { "error": "Unknown" });
            });
        });
    }
    post(body) {
        return new Promise((resolve, reject) => {
            this.api.post(this.endpoint, body).then((res) => {
                resolve(res.data);
            }, (err) => {
                reject(err.error || { "error": "Unknown" });
            });
        });
    }
}
