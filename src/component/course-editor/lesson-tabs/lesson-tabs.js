import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {connect} from "react-redux"
import EditableItem from "../../editable-item";
import lessonService from "../../../services/lesson-service"
import "./lesson-tabs.css"

const LessonTabs = ({   lessons=[],
                        findLessonsForModule,
                        createLessonForModule,
                        updateLesson,
                        deleteLesson}) =>
{
    const {layout, courseId, moduleId, lessonId} = useParams()
    useEffect(()=> {
        if (moduleId !== "undefined" && typeof moduleId !== "undefined") {
            findLessonsForModule(moduleId)
        }
    },[moduleId])
    return (
        <ul className="nav nav-tabs">
            {
                lessons.map(lesson =>
                                <EditableItem
                                    // className="nav-item"
                                    key={lesson._id}
                                    updateItem={updateLesson}
                                    deleteItem={deleteLesson}
                                    active={lessonId === lesson._id}
                                    to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                                    item={lesson}/>
                )
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

const dtpm = (dispatch) => {
    return {
        findLessonsForModule: (moduleId) => {
            lessonService.findLessonsForModule(moduleId)
                .then(lessons => dispatch({
                                             type: "FIND_LESSONS_FOR_MODULE",
                                             lessons: lessons
                                         }))
        },
        createLessonForModule: (moduleId) => {
            lessonService.createLesson(moduleId, {title: "New Lesson"})
                .then(lesson => dispatch({
                                            type: "CREATE_LESSON",
                                            lesson
                                        }))
        },
        updateLesson: (newItem) => {
            lessonService.updateLesson(newItem._id, newItem)
                .then(status => dispatch(
                    {
                        type: "UPDATE_LESSON",
                        updatedLesson: newItem
                    }))
        },
        deleteLesson: (lessonToDelete) => {
            lessonService.deleteLesson(lessonToDelete._id)
                .then(status => dispatch({
                                            type: "DELETE_LESSON",
                                            lessonToDelete
                                        }))

        }
    }
}

export default connect(stpm, dtpm)
(LessonTabs)