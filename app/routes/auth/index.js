import Route from '@ember/routing/route';
import RSVP from 'rsvp';
export default Route.extend({
  model(){
    return RSVP.hash({
      lectures: this.store.findAll('lecture'),
      teacher: this.store.findAll('teacher'),
      lecture_rule: this.store.findAll('lecture_rule'),
      lecture: this.store.createRecord('lecture'),
    });
}
});
