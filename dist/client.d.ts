import { Environment } from './environment';
import { AppsResource } from './resource/apps';
import { PackageResource } from './resource/package';
import { SnapshotsResource } from './resource/snapshot';
import { UserResource } from './resource/user';
export { Environment } from './environment';
export interface ProUser {
    email: string;
    id: number;
    name: string;
    orgs: any;
    teams: any;
}
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
    user: ProUser;
    constructor(cfg?: Environment);
    login(email: string, password: string): Promise<ProUser>;
}
