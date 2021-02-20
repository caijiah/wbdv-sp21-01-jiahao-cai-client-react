import React from "react";

export default class CourseManager
    extends React.Component {
    render() {
        return (
            <div className="sticky-nav sticky-nav-padding">
                <div className="row sticky-nav-row">
                    <div className="col-md-1 col">
                        <i id="expand-button" className="fa fa-bars fa-2x"></i>
                    </div>
                    <div className="col-md-2 col-2 d-none d-md-block">
                        <h5>Course Manager</h5>
                    </div>
                    <div className="col-md-8 col-6 search">
                        <input id="search-bar" className="form-control"
                               placeholder="New Course Title"/>
                    </div>
                    <div className="col-md-1 col plus-button">
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