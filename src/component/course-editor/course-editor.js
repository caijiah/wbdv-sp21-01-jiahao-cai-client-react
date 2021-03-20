import React, {useEffect, useState} from 'react'
import {Link, useParams} from "react-router-dom";
import "./course-editor.css"
import moduleReducer from "../../reducer/module-reducer"
import lessonReducer from "../../reducer/lesson-reducer";
import topicReducer from "../../reducer/topic-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list/module-list";
import LessonTabs from "./lesson-tabs/lesson-tabs";
import TopicPills from "./topic-pills/topic-pills"
import {findCourseById} from "../../services/course-service";
import widgetReducer from "../../reducer/widget-reducer";
import WidgetList from "../widgets/widget-list";

const reducer = combineReducers({
        moduleReducer: moduleReducer,
        lessonReducer: lessonReducer,
        topicReducer: topicReducer,
        widgetReducer: widgetReducer
    })

const store = createStore(reducer)

const CourseEditor = ({history}) => {
    const {layout, courseId} = useParams()
    const [courseTitle, setCourseTitle] = useState('')
    useEffect(()=> {
        findCourseById(courseId).then(course => {setCourseTitle(course.title)})
    }, [courseId])
    return (
        <Provider store={store}>
            <div>
                <nav className="navbar navbar-light">
                    <a className="navbar-brand">
                        {/*<i className="fas fa-arrow-alt-circle-left mr-2 fa-2x back-button"*/}
                        {/*   aria-hidden="true"*/}
                        {/*   onClick={() => history.goBack()}/>*/}
                        <i className="fa fa-times fa-2x mr-2 closing-button"
                           aria-hidden="true"
                           onClick={() => history.push(`/courses/${layout}`)}/>
                           {courseTitle}
                    </a>
                </nav>
                <div className="container-fluid">
                    <div className="row editor-content">
                        <div className="col-3">
                            <ModuleList/>
                        </div>
                        <div className="col-9">
                            <LessonTabs/>
                            <br/>
                            <TopicPills/>
                            <br/>
                            <WidgetList/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <div className="col-sm-10">
                            <Link to="/">
                                <i className="fa fa-home"/> Back to homepage
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Provider>
    )
}
export default CourseEditor