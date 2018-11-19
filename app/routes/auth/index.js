import Route from '@ember/routing/route';
import RSVP from 'rsvp';
export default Route.extend({
  model(){
    return RSVP.hash({
      teacher: this.store.findAll('teacher'),
      lecture: this.store.createRecord('lecture'),
    });
}
});
