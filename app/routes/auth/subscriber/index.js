import Route from '@ember/routing/route';
import RSVP from 'rsvp';
export default Route.extend({
  model(){
    return RSVP.hash({
      subscriber: this.store.findAll('subscriber'),
      contract: this.store.findAll('contract'),
    });
  }
});
