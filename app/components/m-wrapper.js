import Component from '@ember/component';

export default Component.extend({
  query: '',
  method:'',
  options:{},
  didInsertElement(){
    let query = this.get('query');
    let method = this.get('method');
    let options = this.get('options');
    return $(query)[method](options);
  }
});
