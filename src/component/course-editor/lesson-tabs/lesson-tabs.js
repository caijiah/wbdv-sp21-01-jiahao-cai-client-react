import React from 'react'
import {connect} from "react-redux"
import EditableItem from "../../editable-item";

const LessonTabs = ({lessons=[]}) =>
    <ul className="nav nav-tabs">
        {
            lessons.map(lesson =>
                            <li
                                key={lesson._id}
                                className="nav-item">
                                <a className="nav-link active" href="#">
                                    <EditableItem item={lesson}/>
                                    {/*<i className="float-right fa fa-trash"/>*/}
                                </a>
                            </li>)
        }
        {/*<li className="list-group-item active">*/}
        {/*    Module 1 - JQuery*/}
        {/*    <i className="pull-right fa fa-trash"/>*/}
        {/*</li>*/}

    </ul>

const stpm = (state) => {
    return {
        lessons: state.lessonReducer.lessons
    }
}

const dtpm = (dispath) => {}

export default connect(stpm, dtpm)
(LessonTabs)