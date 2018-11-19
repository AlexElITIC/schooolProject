import Component from '@ember/component';

export default Component.extend({
  options: {
    defaultDate:null,
    setDefaultDate: true
  },
  init(){
    this._super(...arguments);
    console.log(this.get('defaultDate'))
    this.set('options.defaultDate',this.get('defaultDate'));
  },
  actions: {
    changeFecha(lecture, start_date){
              lecture.set('start_date',start_date)

          }
  }
});
