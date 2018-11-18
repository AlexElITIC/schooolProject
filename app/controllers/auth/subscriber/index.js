import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    deleteSubscriber(model){
      model.destroyRecord().then(()=>{alert("Borrado!")});
    }
  }
});
