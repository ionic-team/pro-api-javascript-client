import { Api } from '../util/api';
import { BaseResource } from './base';

export class AppsResource extends BaseResource {
  constructor(api: Api) { super('/apps', api); }
}
