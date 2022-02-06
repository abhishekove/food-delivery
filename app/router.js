import EmberRouter from '@ember/routing/router';
import config from 'food-delivery/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('signup', { path: '/' });
  this.route('hotel-list', { path: '/hotels' });
  this.route('signup');
});
