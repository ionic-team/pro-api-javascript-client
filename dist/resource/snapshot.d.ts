import { BaseResource } from './base';
import { SubResource } from './sub';
import { User } from './user';
export interface SnapshotListArgs {
    ids?: Array<string>;
    users?: Array<number>;
    ref?: string;
}
export interface SnapshotIOSVersion {
    min: string;
    max: string;
    eq: string;
}
export interface SnapshotAndroidVersion {
    min: string;
    max: string;
    eq: string;
}
export interface Snapshot {
    id: string;
    note: string;
    sha: string;
    ref: string;
    ref_type: string;
    state: string;
    user: User;
    ios_version: SnapshotIOSVersion;
    android_version: SnapshotAndroidVersion;
    created: string;
    short_sha: string;
}
export declare class SnapshotsResource extends SubResource {
    constructor(base: BaseResource);
    del(appId: string, pk: string): Promise<Snapshot>;
    get(appId: string, pk: string): Promise<Snapshot>;
    getUrl(appId: string, pk: string): Promise<any>;
    list(appId: string, params?: SnapshotListArgs): Promise<Array<Snapshot>>;
    patch(appId: string, pk: string, body: Snapshot): Promise<Snapshot>;
    post(appId: string, body: Snapshot): Promise<Snapshot>;
}
