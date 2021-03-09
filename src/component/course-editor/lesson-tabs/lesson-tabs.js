import React from 'react'
import {connect} from "react-redux"

const LessonTabs = ({lessons}) =>
    <ul className="list-group">
        {
            lessons.map(lesson =>
                            <li
                                key={lesson._id}
                                className="list-group-item">
                                {lesson.title}
                                <i className="float-right fa fa-trash"/>
                            </li>)
        }
        {/*<li className="list-group-item active">*/}
        {/*    Module 1 - JQuery*/}
        {/*    <i className="pull-right fa fa-trash"/>*/}
        {/*</li>*/}

    </ul>

const stpm = (state) => {
    return {
        lessons: state.lessons
    }
}

const dtpm = (dispath) => {}

export default connect(stpm, dtpm)
(LessonTabs)