import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class SignupRoute extends Route {
  @service store;
  model() {
    let hotels = this.store.peekAll('restaurant');
    let items = this.store.peekAll('item');
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
  }
}
