import { Environment } from './environment';
import { AppsResource } from './resource/apps';
import { PackageResource } from './resource/package';
import { SnapshotsResource } from './resource/snapshot';
import { User, UserResource } from './resource/user';
export interface ClientResources {
    apps: AppsResource;
    snapshots: SnapshotsResource;
    packages: PackageResource;
    user: UserResource;
}
export declare class ProClient {
    private api;
    env: Environment;
    resource: ClientResources;
    user: User;
    constructor(cfg?: Environment);
    login(email: string, password: string): Promise<User>;
}
