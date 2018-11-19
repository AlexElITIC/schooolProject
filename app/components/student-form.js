import Component from '@ember/component';
import {isBlank} from '@ember/utils';
export default Component.extend({
  actions: {
    save(student){
       if(this.student.get('isNew')) {
         if (!isBlank(student.get('name'))&&!isBlank(student.get('email'))&&!isBlank(student.get('phone'))&&!isBlank(student.get('last_name'))) {
           this.onSave();
         }
         else{
           alert('no dejes campos vacios');
         }
       }else{
         this.onSave(student);
       }
    }
  }
});
