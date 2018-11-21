import DS from 'ember-data';

export default DS.Model.extend({
  start_date: DS.attr('string'),
  start_hour: DS.attr('string'),
  classroom:DS.attr('string'),
  teacher:DS.belongsTo('teacher'),
  reservation:DS.hasMany('reservation'),
  lecture_rule:DS.belongsTo('lecture_rule')
});
