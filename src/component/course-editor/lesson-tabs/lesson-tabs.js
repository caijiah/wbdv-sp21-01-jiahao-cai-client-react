import React from 'react'
import {useParams} from 'react-router-dom'
import {connect} from "react-redux"
import EditableItem from "../../editable-item";

const LessonTabs = ({lessons=[]}) =>
{
    const {layout, courseId, moduleId} = useParams()
    return (
        <ul className="nav nav-tabs">
            {
                lessons.map(lesson =>
                                <li
                                    key={lesson._id}
                                    className="nav-item">
                                    <EditableItem
                                        to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                                        item={lesson}/>
                                </li>)
            }
        </ul>
    )
}

const stpm = (state) => {
    return {
        lessons: state.lessonReducer.lessons
    }
}

const dtpm = (dispath) => {}

export default connect(stpm, dtpm)
(LessonTabs)