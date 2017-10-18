import { BaseResource } from './base';
var SnapshotsResource = /** @class */ (function () {
    function SnapshotsResource(api) {
        this._base = new BaseResource('/apps/', api);
    }
    SnapshotsResource.prototype.del = function (appId, pk) {
        this._base.endpoint = '/apps/' + appId + '/snapshots';
        return this._base.del(pk);
    };
    SnapshotsResource.prototype.get = function (appId, pk) {
        this._base.endpoint = '/apps/' + appId + '/snapshots';
        return this._base.get(pk);
    };
    SnapshotsResource.prototype.getUrl = function (appId, pk) {
        this._base.endpoint = '/apps/' + appId + '/snapshots';
        return this._base.get(pk + '/get-url');
    };
    SnapshotsResource.prototype.list = function (appId, params) {
        this._base.endpoint = '/apps/' + appId + '/snapshots';
        return this._base.list(params);
    };
    SnapshotsResource.prototype.patch = function (appId, pk, body) {
        this._base.endpoint = '/apps/' + appId + '/snapshots';
        return this._base.patch(pk, body);
    };
    SnapshotsResource.prototype.post = function (appId, body) {
        this._base.endpoint = '/apps/' + appId + '/snapshots';
        return this._base.post(body);
    };
    return SnapshotsResource;
}());
export { SnapshotsResource };
