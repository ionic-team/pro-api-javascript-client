import { Api } from './util/api';
import { AppsResource } from './resource/apps';
import { PackageResource } from './resource/package';
import { SnapshotsResource } from './resource/snapshot';
import { UserResource } from './resource/user';
var ProClient = /** @class */ (function () {
    function ProClient(cfg) {
        this.user = null;
        // Set config from env
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
        // Instantiate API
        this.api = new Api(this.env);
        // Instantiate base resources
        var apps = new AppsResource(this.api);
        // Instantiate subresources
        var snapshots = new SnapshotsResource(apps);
        // Set resources on client
        this.resource = {
            apps: apps,
            snapshots: snapshots,
            packages: new PackageResource(this.api),
            user: new UserResource(this.api)
        };
    }
    ProClient.prototype.login = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.api.post('/login', {
                email: email,
                password: password,
                source: 'api'
            }).then(function (res) {
                _this.user = res.data.user;
                _this.api.apiToken = res.data.token;
                console.log("Logged in user:", _this.user.name);
                resolve(_this.user);
            }, function (err) {
                console.error("Login error:", err.error.message || "Unknown");
                reject(err.error);
            });
        });
    };
    return ProClient;
}());
export { ProClient };
