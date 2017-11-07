import { BaseResource } from './base';
import { Api } from '../util/api';

export class MonitoringResource extends BaseResource {
  constructor(api: Api) { super('/monitoring', api); }
}
