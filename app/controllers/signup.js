import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class SignupController extends Controller {
  @service userName;
  @service router;

  @action
  submitDetails() {
    console.log(this.userName.getFirstName);
    if (this.userName.getFirstName === 'Food') {
      alert("Enter First Name");
      return;
    }
    if (this.userName.getLastName === 'Delivery') {
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
