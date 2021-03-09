import React from 'react'
import {Link} from "react-router-dom";
import "./course-editor.css"
import moduleReducer from "../../reducer/module-reducer"
import {createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list/module-list";

const store = createStore(moduleReducer)

const CourseEditor = ({history}) => {
    return (
        <Provider store={store}>
            <div>
                <nav className="navbar navbar-light">
                    <a className="navbar-brand">
                        <i className="fas fa-arrow-alt-circle-left mr-2 fa-2x back-button"
                           aria-hidden="true"
                           onClick={() => history.goBack()}/>
                        <i className="fa fa-times fa-2x mr-2 closing-button"
                           aria-hidden="true"
                           onClick={() => history.goBack()}/>
                        CS5610 - WebDev
                    </a>
                </nav>
                <div className="container editor-content">
                    <div className="row">
                        <div className="col-4">
                            <ModuleList/>
                        </div>
                        <div className="col-8">
                            <br/>

                            <ul className="nav nav-pills">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Topic 1</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Topic 2</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Topic 3</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" href="#" tabIndex="-1"
                                       aria-disabled="true">
                                        Topic 4
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" tabIndex="-1" aria-disabled="true">
                                        <i className="fa fa-plus"/>
                                    </a>
                                </li>
                            </ul>


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