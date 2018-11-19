import Controller from '@ember/controller';
export default Controller.extend({
  actions:{
    deleteStudent(model){
      model.get('student').then((student)=>{student.destroyRecord().then(()=>{window.location.reload(true)})});
    }
  }
});
