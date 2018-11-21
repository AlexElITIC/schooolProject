import Route from '@ember/routing/route';
import RSVP from 'rsvp';
export default Route.extend({
  model(params){

      return RSVP.hash({
        reservation: this.store.query('reservation', {student_id: params.id}),
        student: this.store.findRecord('student', params.id)
      })
    }
});
