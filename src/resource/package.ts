import { BaseResource } from './base';
import { SubResource } from './sub';
import { Snapshot } from './snapshot';

export interface PackagePost {
  snapshot_id: string;
  type: string;
  platform: string;
  profile_tag?: string
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

export class PackageResource extends SubResource {

  constructor(base: BaseResource) { super(base, '/native-builds'); }

  del(appId: string, pk: string): Promise<NativeBuild> { return super.del(appId, pk); }

  download(appId: string, pk: string): Promise<any> { return super.get(appId, pk + '/download'); }

  get(appId: string, pk: string): Promise<NativeBuild> { return super.get(appId, pk); }

  list(appId: string, params?: PackageList): Promise<Array<NativeBuild>> { return super.list(appId, params); }

  patch(appId: string, pk: string, body: NativeBuild): Promise<NativeBuild> { return super.patch(appId, pk, body); }

  post(appId: string, body: PackagePost): Promise<any> { return super.post(appId, body); }
}
