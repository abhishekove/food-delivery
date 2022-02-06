import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class SignupController extends Controller {
  @service userName;
  @service router;

  @action
  submitDetails() {
    if (this.userName.getFirstName === 'Food' || this.userName.getFirstName === '') {
      alert("Enter First Name");
      return;
    }
    if (this.userName.getLastName === 'Delivery' || this.userName.getLastName === '') {
      alert("Enter Last Name");
      return;
    }
    this.router.transitionTo('hotel-list');
  }

  @action
  setFirstName(name) {
    this.userName.setFirstName = name.target.value;
  }
  get getFirstName() {
    return this.userName.getFirstName;
  }
  @action
  setLastName(name) {
    this.userName.setLastName = name.target.value;
  }
  get getLastName() {
    return this.userName.getLastName;
  }
}
