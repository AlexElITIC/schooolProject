import Controller from '@ember/controller';
export default Controller.extend({

actions:{
        saveLecture(lecture, selectedTeacher){
          lecture.set('teacher', selectedTeacher);
          lecture.save().then(()=>{window.location.reload(true);})
        },
        deleteLecture(model){
          model.destroyRecord().then(()=>{window.location.reload(true);});
        }
}
});
