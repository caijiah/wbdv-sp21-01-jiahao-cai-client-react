import lessonService from "../services/lesson-service";

export const FIND_LESSONS_FOR_MODULE = "FIND_LESSONS_FOR_MODULE"
export const CREATE_LESSON = "CREATE_LESSON"
export const UPDATE_LESSON = "UPDATE_LESSON"
export const DELETE_LESSON = "DELETE_LESSON"
export const CLEAR_LESSON = "CLEAR_LESSON"

const findLessonsForModule = (dispatch, moduleId) => {
    lessonService.findLessonsForModule(moduleId)
        .then(lessons => dispatch({
                                      type: FIND_LESSONS_FOR_MODULE,
                                      lessons: lessons
                                  }))
}

const createLessonForModule = (dispatch, moduleId) => {
    lessonService.createLesson(moduleId, {title: "New Lesson"})
        .then(lesson => dispatch({
                                     type: CREATE_LESSON,
                                     lesson
                                 }))
}
const updateLesson = (dispatch, newItem) => {
    lessonService.updateLesson(newItem._id, newItem)
        .then(status => dispatch(
            {
                type: UPDATE_LESSON,
                updatedLesson: newItem
            }))
}
const deleteLesson = (dispatch, lessonToDelete) => {
    lessonService.deleteLesson(lessonToDelete._id)
        .then(status => dispatch({
                                     type: DELETE_LESSON,
                                     lessonToDelete
                                 }))

}

const clearLesson = (dispatch) =>
    dispatch({type: CLEAR_LESSON})

const lessonActions = {
    findLessonsForModule,
    createLessonForModule,
    updateLesson,
    deleteLesson,
    clearLesson
}

export default lessonActions