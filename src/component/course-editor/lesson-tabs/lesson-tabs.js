import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {connect} from "react-redux"
import EditableItem from "../../editable-item";
import lessonService from "../../../services/lesson-service"
import "./lesson-tabs.css"
import moduleService from "../../../services/module-service";

const LessonTabs = ({   lessons=[],
                        findLessonsForModule,
                        createLessonForModule,
                        deleteLesson}) =>
{
    const {layout, courseId, moduleId} = useParams()
    useEffect(()=> {
        findLessonsForModule(moduleId)
    },[moduleId])
    return (
        <ul className="nav nav-tabs">
            {
                lessons.map(lesson =>
                                <li
                                    key={lesson._id}
                                    className="nav-item">
                                    <EditableItem
                                        deleteItem={deleteLesson}
                                        to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                                        item={lesson}/>
                                </li>)
            }
            <li>
                <i onClick={() => createLessonForModule(moduleId)}
                   className="fas fa-plus addLesson-button"/>
            </li>
        </ul>
    )
}

const stpm = (state) => {
    return {
        lessons: state.lessonReducer.lessons
    }
}

const dtpm = (dispath) => ({
    findLessonsForModule: (moduleId) => {
        lessonService.findLessonsForModule(moduleId)
            .then(lessons => dispath({
                type: "FIND_LESSONS_FOR_MODULE",
                lessons: lessons
            }))
    },
    createLessonForModule: (moduleId) => {
        lessonService.createLesson(moduleId, {title:"New Lesson"})
            .then(lesson => dispath({
                type: "CREATE_LESSON",
                lesson
            }))
    },
    deleteLesson: (lessonToDelete) => {
        lessonService.deleteLesson(lessonToDelete._id)
            .then(status => dispath({
                                        type: "DELETE_LESSON",
                                        lessonToDelete
                                    }))

    }
})

export default connect(stpm, dtpm)
(LessonTabs)