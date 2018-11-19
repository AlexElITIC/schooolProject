import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
  updateInfo(student){
    student.save().then(()=>{alert("actualizado!")}).catch((e)=>{alert("error")}).finally(()=>{this.transitionToRoute('auth.student.index')})
  }
}
});
