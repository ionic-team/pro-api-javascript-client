import { Api } from './util/api';
import { AppsResource } from './resource/apps';
export class ProClient {
    constructor(cfg) {
        this.user = null;
        this.env = {
            debug: false,
            host: "https://api.ionicjs.com"
        };
        if (cfg) {
            if (cfg.debug) {
                this.env.debug = cfg.debug;
            }
            if (cfg.host) {
                this.env.host = cfg.host;
            }
        }
        this.api = new Api(this.env);
        this.resource = {
            apps: new AppsResource(this.api)
        };
    }
    login(email, password) {
        return new Promise((resolve, reject) => {
            this.api.post('/login', {
                email: email,
                password: password,
                source: 'api'
            }).then((res) => {
                this.user = res.data.user;
                this.api.apiToken = res.data.token;
                console.log("Logged in user:", this.user.name);
                resolve(this.user);
            }, (err) => {
                console.error("Login error:", err.error.message || "Unknown");
                reject(null);
            });
        });
    }
}
