import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    saveReservation(reservation,selectedActivity){
      reservation.set('activity',selectedActivity);
      reservation.save().then(()=>{window.location.reload(true)})
    },
    updateReservation(res){
      res.save().then(()=>{window.location.reload(true)})
    },
    deleteReservation(res){
      res.destroyRecord().then(()=>{window.location.reload(true)})
    }
  }
});
