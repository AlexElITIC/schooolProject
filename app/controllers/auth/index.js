import Controller from '@ember/controller';
import {computed} from '@ember/object'
export default Controller.extend({
  datenow: computed(function(){
    console.log(new Date())
    return  new Date()

  }),
actions:{
      setHora(lecture, start_hour){
            lecture.set('start_hour',start_hour)

        },
        saveLecture(lecture, selectedTeacher, classroom){
          lecture.set('teacher', selectedTeacher);
          lecture.set('classroom',classroom);
          lecture.save().then(()=>{window.location.reload(true);})
        }
}
});
