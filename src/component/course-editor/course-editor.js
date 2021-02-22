import React from 'react'
import {Link} from "react-router-dom";
import "./course-editor.css"

const CourseEditor = ({history}) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <i className="fas fa-arrow-alt-circle-left mr-2 fa-2x back-button"
                   aria-hidden="true"
                   onClick={() => history.goBack()}/>
                <a className="navbar-brand">
                    <i className="fa fa-times mr-2" aria-hidden="true"/>
                    CS5610 - WebDev
                </a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item ml-3 active">
                            <a className="nav-link" href="#">Build <span
                                className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item ml-3">
                            <a className="nav-link" href="#">Pages </a>
                        </li>
                        <li className="nav-item ml-3">
                            <a className="nav-link disabled" href="#">Theme</a>
                        </li>
                        <li className="nav-item ml-3">
                            <a className="nav-link" href="#">Store</a>
                        </li>
                        <li className="nav-item ml-3">
                            <a className="nav-link" href="#">Apps</a>
                        </li>
                        <li className="nav-item ml-3">
                            <a className="nav-link" href="#">Settings</a>
                        </li>
                        <li className="nav-item ml-3">
                            <a className="nav-link" href="#" tabIndex="-1" aria-disabled="true">
                                <i className="fa fa-plus"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="container">
                <div className="row">
                    <div className="col-4">

                        <ul className="list-group">
                            <li className="list-group-item active">
                                Module 1 - JQuery
                                <i className="pull-right fa fa-trash"></i>
                            </li>
                            <li className="list-group-item">
                                Module 2 - React
                                <i className="pull-right fa fa-trash"></i>
                            </li>
                            <li className="list-group-item">
                                Module 3 - Redux
                                <i className="pull-right fa fa-trash"></i>
                            </li>
                            <li className="list-group-item">
                                Module 4 - Native
                                <i className="pull-right fa fa-trash"></i>
                            </li>
                            <li className="list-group-item">
                                Module 5 - Angular
                                <i className="pull-right fa fa-trash"></i>
                            </li>
                            <li className="list-group-item">
                                Module 6 - Node
                                <i className="pull-right fa fa-trash"></i>
                            </li>
                            <li className="list-group-item">
                                Module 7 - Mongo
                                <i className="pull-right fa fa-trash"></i>
                            </li>
                            <li className="list-group-item">
                                <i className="pull-right fa fa-plus"></i>
                            </li>
                        </ul>

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
                                    <i className="fa fa-plus"></i>
                                </a>
                            </li>
                        </ul>


                    </div>
                </div>
                <div className="mb-3 row">
                    <div className="col-sm-10">
                        <Link to="/">
                            <i className="fa fa-home"></i> Back to homepage
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CourseEditor