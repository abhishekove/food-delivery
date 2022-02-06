import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class UserNameService extends Service {
  _firstName = 'Food';
  _lastName = 'Delivery';
  set setFirstName(name) {
    this._firstName = name;
  }
  get getFirstName() {
    return this._firstName;
  }
  set setLastName(name) {
    this._lastName = name;
  }
  get getLastName() {
    return this._lastName;
  }
}
