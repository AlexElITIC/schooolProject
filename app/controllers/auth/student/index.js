import Controller from '@ember/controller';
export default Controller.extend({
  names: ['Stefan', 'Miguel', 'Tomster', 'Pluto'],
  actions: {
    foo() { },
    goToEdit(){
      this.transitionToRoute('auth.student.update-info', 1)
    }
  }
});
