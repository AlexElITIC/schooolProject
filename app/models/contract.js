import DS from 'ember-data';
import {computed} from '@ember/object';
export default DS.Model.extend({
  contract_signature_date: DS.attr('string'),
  subscriber:DS.belongsTo('subscriber'),
  end_date: computed('contract_signature_date', function(){
    var d = new Date(this.get('contract_signature_date'));
    var year = d.getFullYear();
    var month = d.getMonth();
    var day = d.getDate();
    var finalDate = new Date(year + 1, month, day+1);
    return finalDate;
  })
});
