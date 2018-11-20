import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    goToEdit(id){
      this.transitionToRoute('auth.teacher.update-info', id)
    },
    deleteTeacher(teacher){
      teacher.destroyRecord().then(()=>{window.location.reload(true);})
      // teacher.destroyRecord().then(()=>{alert('borrado')});
    }
  }
});
