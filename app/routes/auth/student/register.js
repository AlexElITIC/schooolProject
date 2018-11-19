import Route from '@ember/routing/route';
import RSVP from 'rsvp';
export default Route.extend({
  model(){
    return RSVP.hash({
      activity: this.store.findAll('activity'),
      student: this.store.createRecord('student'),
      contract: this.store.findAll('contract')
    });
  }
});
