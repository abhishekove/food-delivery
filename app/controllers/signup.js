import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class SignupController extends Controller {
  @service userName;

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
