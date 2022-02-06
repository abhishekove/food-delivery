import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class HotelRoute extends Route {
  @service store;
  // hotelName;
  model(params) {
    let restaurant = this.store.peekRecord('restaurant', params.id);
    let items = this.store.peekAll('item');
    return {
      name: restaurant.name,
      items: items,
    };
  }
}
