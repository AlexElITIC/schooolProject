import Route from '@ember/routing/route';
import RSVP from 'rsvp';
export default Route.extend({

  model(params){

      return RSVP.hash({
        reservations: this.store.query('reservation', {lecture_id: params.id}),
        lecture: this.store.findRecord('lecture',  params.id),
        activity: this.store.findAll('activity'),
        student: this.store.findAll('student'),
        reservation: this.store.findRecord('lecture',params.id).then((lecture)=>{return this.store.createRecord('reservation',{lecture:lecture,grade: 0.0})})
      })
    }
});
