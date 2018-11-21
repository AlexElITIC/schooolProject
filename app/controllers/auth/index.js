import Controller from '@ember/controller';
export default Controller.extend({

actions:{
        saveLecture(lecture, selectedTeacher, selectedRule){
          lecture.set('teacher', selectedTeacher);
          lecture.set('lecture_rule', selectedRule);
          lecture.save().then(()=>{window.location.reload(true);})
        },
        deleteLecture(model){
          model.destroyRecord().then(()=>{window.location.reload(true);});
        }
}
});
