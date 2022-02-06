import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class HeaderComponent extends Component {
    @service userName;
    get getFirstName() {
        return this.userName.getFirstName;
    }
    get getLastName() {
        return this.userName.getLastName;
    }
}
