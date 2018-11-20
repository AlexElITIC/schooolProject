import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login',{path:'/'});
  this.route('auth', function() {
    this.route('teacher', function() {
      this.route('update-info',{path: '/:id'});
      this.route('register');
    });
    this.route('student', function() {
      this.route('update-info',{path: '/:id'});
      this.route('register');
    });
    this.route('subscriber', function() {
      this.route('update-info',{path: '/:id'});
      this.route('register');
    });

    this.route('lecture', function() {
      this.route('detail',{path: '/:id'});
    });
  });
});

export default Router;
