import { BaseResource } from './base';
export class AppsResource extends BaseResource {
    constructor(api) { super('/apps', api); }
}
