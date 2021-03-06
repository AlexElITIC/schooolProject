import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  last_name: DS.attr('string'),
  phone: DS.attr('string'),
  mail: DS.attr('string'),
  lecture: DS.hasMany('lecture')
});
