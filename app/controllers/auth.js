import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    logOut(){
      this.transitionToRoute('login')
    }
  }
});
