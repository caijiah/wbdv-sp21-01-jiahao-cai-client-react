import React from 'react'
import {Link} from "react-router-dom";
import CourseCard from "./course-card/course-card";
import "./course-grid.css"

const CourseGrid = (
    {
        courses,
    updateCourse,
    deleteCourse}) => {
    return (
        <div className="container-fluid grid-header">
            <div className="row">
                <div className="col-6 d-none d-md-block">
                    Recent Document
                </div>
                <div className="col-3 d-none d-md-block">
                    Owned by me
                    <i className="fa fa-sort-down"/>
                </div>
                <div className="col">
                    <span className="float-right grid-header-buttons">
                        <i className="fas fa-folder"
                           aria-hidden="true"/>
                        <i className="fas fa-sort-alpha-up-alt"
                           aria-hidden="true"/>
                           <Link to="/courses/table">
                               <i className="fa fa-list"/>
                           </Link>
                    </span>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                {
                    courses.map(course =>
                                       <CourseCard
                                           key={course._id}
                                           deleteCourse={deleteCourse}
                                           updateCourse={updateCourse}
                                           course={course}
                                           title={course.title}
                                           lastModified={course.lastModified}
                                           owner={course.owner}/>)
                }
            </div>
        </div>
    )
}

export default CourseGrid