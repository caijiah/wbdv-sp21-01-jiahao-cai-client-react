import React from "react";
import api from "../../services/course-service";
import "./course-manager.css"

export default class CourseManager
    extends React.Component {
    render() {
        return (
            <div className="sticky-nav sticky-nav-padding">
                <div className="row sticky-nav-row">
                    <div className="col-lg-1 col">
                        <i className="fas fa-bars fa-2x"/>
                    </div>
                    <div className="col-lg-3 col-2 d-none d-lg-block">
                        <h5>Course Manager</h5>
                    </div>
                    <div className="col-lg-7 col-md-8 col-6 search">
                        <input id="search-bar" className="form-control"
                               placeholder="New Course Title"/>
                    </div>
                    <div className="col-lg-1 col plus-button">
                        <span className="fa-stack fa-lg">
                            <i className="fa fa-circle fa-stack-2x"></i>
                            <i className="fa fa fa-plus fa-stack-1x"></i>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}