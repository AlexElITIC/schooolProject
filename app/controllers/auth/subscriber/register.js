import Controller from '@ember/controller';
//import moment from 'moment';
export default Controller.extend({

  actions:{
    createNewSubscriber(model){

      model.save().then((suscriptor)=>{

        this.store.createRecord('contract',{
          subscriber: suscriptor,
          contract_signature_date: new Date().toString()
        }).save().then(()=>{
          window.location.reload(true);
        })
      })
    }
  }
});
