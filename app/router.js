import EmberRouter from '@ember/routing/router';
import config from 'sample-graph/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {});