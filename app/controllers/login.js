import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    login(){
      let username = this.get('username');
      let password = this.get('password');
      if (username && username == "correo@correo.com" && password && password =="123") {
        this.set('username','')
        this.set('password','')
        this.transitionToRoute('auth');

      }
      else{
        alert("usuario no valido")
      }
    }
  }
});
