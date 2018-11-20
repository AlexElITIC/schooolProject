import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    createNewTeacher(model){
      model.save().then(()=>{alert('saved')})
    }
  }
});
