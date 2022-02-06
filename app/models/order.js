import Model, { attr, hasMany } from '@ember-data/model';

export default class OrderModel extends Model {
  @attr restoname;
  @hasMany('item') items;
  @attr cost;
}
