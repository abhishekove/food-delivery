import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class CartRoute extends Route {
    @service store;

    model() {
        let orders = this.store.peekAll('order');
        return orders;
    }
}
