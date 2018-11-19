import Component from '@ember/component';
import { isBlank } from '@ember/utils';
export default Component.extend({
  actions:{
  save(model){
    console.log(model)
     if(this.model.get('isNew')) {
       if ((this.get('model.name')!=''&&this.get('model.last_name')!=''&&this.get('model.phone')!=''&&this.get('model.mail')!='')&&(this.get('model.name')!=null&&this.get('model.last_name')!=null&&this.get('model.phone')!=null&&this.get('model.mail')!=null)) {
         this.onSave();
       }
       else{
         alert('no dejes campos vacios');
       }
     }else{
       this.onSave(model);
     }
  }
}
});
