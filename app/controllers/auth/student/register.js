import Controller from '@ember/controller';

export default Controller.extend({
  selectedContract: null,
  actions:{
    createNewStudent(model, selectedContract){
      model.student.save().then((student)=>{
          this.store.createRecord('student-contract',{contract:selectedContract,student:student,start_date:selectedContract.get('contract_signature_date')}).save().then(()=>{window.location.reload(true);})
        })
    }
  }
});
