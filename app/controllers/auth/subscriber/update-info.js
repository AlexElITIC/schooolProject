import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    updateInfo(model){
      model.save().then(()=>{alert("actualizado!")}).catch((e)=>{alert("error")}).finally(()=>{this.transitionToRoute('auth.subscriber.index')})
    }
  }
});
