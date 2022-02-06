import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ItemComponent extends Component {
    @service store;

    @action
    click() {
        let id = this.args.id;
        let order = this.store.peekRecord('order', id);
        console.log(order);
        if (order === null) {
            this.store.push({
                data: [{
                    id: id,
                    type: 'order',
                    attributes: {
                        restoName: this.args.name,
                        items: [this.args.item],
                        cost: this.args.item.cost,
                    },
                    relationships: {}
                },]
            });
        }
        else {
            order.cost = parseInt(order.cost) + parseInt(this.args.item.cost);
            order.items = [...(order.items) , this.args.item];
        }
    }
}
