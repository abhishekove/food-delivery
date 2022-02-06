import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class HotelRoute extends Route {
  @service store;
  model(params) {
    let restaurant = this.store.peekRecord('restaurant', params.id);
    let items = this.store.peekAll('item');
    let orders = this.store.peekAll('order');
    
    return {
      name: restaurant.name,
      items: items,
      id: orders.length + 1,
    };
  }
}
