import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    createNewTeacher(nombre, apellido, telefono, correo){
      this.store.createRecord('teacher',{name: nombre, last_name:apellido, phone:telefono, mail:correo}).save().then(()=>{alert('guardado!')})
    }
  }
});
