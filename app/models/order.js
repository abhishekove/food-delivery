import Model, { attr } from '@ember-data/model';

export default class OrderModel extends Model {
  @attr restoname;
  @attr items;
  @attr cost;
}
