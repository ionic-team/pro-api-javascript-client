import { BaseResource } from './base';
import { SubResource } from './sub';
import { Snapshot } from './snapshot';
export interface PackagePost {
    snapshot_id: string;
    type: string;
    platform: string;
    profile_tag?: string;
}
export interface PackageList {
    snapshots?: Array<string>;
    platform?: string;
}
export interface NativeBuild {
    id: string;
    platform: string;
    type: string;
    created: string;
    finished: string;
    state: string;
    snapshot: Snapshot;
}
export declare class PackageResource extends SubResource {
    constructor(base: BaseResource);
    del(appId: string, pk: string): Promise<NativeBuild>;
    download(appId: string, pk: string): Promise<any>;
    get(appId: string, pk: string): Promise<NativeBuild>;
    list(appId: string, params?: PackageList): Promise<Array<NativeBuild>>;
    patch(appId: string, pk: string, body: NativeBuild): Promise<NativeBuild>;
    post(appId: string, body: PackagePost): Promise<any>;
}
