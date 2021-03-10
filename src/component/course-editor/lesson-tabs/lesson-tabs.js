import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {connect} from 'react-redux'
import EditableItem from "../../editable-item";
import lessonService from "../../../services/lesson-service"
import "./lesson-tabs.css"

const LessonTabs = ({   lessons=[],
                        findLessonsForModule,
                        createLessonForModule,
                        updateLesson,
                        deleteLesson,
                        clearLesson}) =>
{
    const {layout, courseId, moduleId, lessonId} = useParams()
    const [enableAddButton, setEnableAddButton] = useState(false)
    useEffect(()=> {
        if (moduleId !== "undefined"
            && typeof moduleId !== "undefined") {
            findLessonsForModule(moduleId)
            setEnableAddButton(true)
        } else {
            setEnableAddButton(false)
            clearLesson()
        }
    },[moduleId])
    return (
        <ul className="nav nav-tabs nav-fill">
            {
                lessons.map(lesson =>
                                <EditableItem
                                    key={lesson._id}
                                    updateItem={updateLesson}
                                    deleteItem={deleteLesson}
                                    active={lessonId === lesson._id}
                                    type='tabs'
                                    to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                                    item={lesson}/>
                )
            }
            { enableAddButton &&
                <li>
                    <i onClick={() => createLessonForModule(moduleId)}
                       className="ml-3 fas fa-plus fa-2x addLesson-button"/>
                </li>
            }
            { !enableAddButton &&
              <h4>
                  Please select a Module to check lessons.
              </h4>
            }
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

        },
        clearLesson: () =>
            dispatch({
                type: "CLEAR_LESSON"
            })
    }
}

export default connect(stpm, dtpm)
(LessonTabs)