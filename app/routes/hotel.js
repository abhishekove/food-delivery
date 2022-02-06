import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class HotelRoute extends Route {
  @service store;
  model(params) {
    let restaurant = this.store.peekRecord('restaurant', params.id);
    let items = this.store.peekAll('item');
    let orders = this.store.peekAll('order');
    let hotels = this.store.peekAll('restaurant');
    if (items.length === 0)
      this.store.push({
        data: [
          {
            id: 1,
            type: 'item',
            attributes: {
              name: 'Donuts',
              cost: 100,
            },
            relationships: {},
          },
          {
            id: 2,
            type: 'item',
            attributes: {
              name: 'Pizza',
              cost: 200,
            },
            relationships: {},
          },
          {
            id: 3,
            type: 'item',
            attributes: {
              name: 'Sushi',
              cost: 300,
            },
            relationships: {},
          },
        ],
      });
    if (hotels.length === 0)
      this.store.push({
        data: [
          {
            id: 1,
            type: 'restaurant',
            attributes: {
              name: 'Chinese Food',
            },
            relationships: {},
          },
          {
            id: 2,
            type: 'restaurant',
            attributes: {
              name: 'Indian Food',
            },
            relationships: {},
          },
        ],
      });
    return {
      name: restaurant.name,
      items: items,
      id: orders.length + 1,
    };
  }
}
