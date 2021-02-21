import React from 'react'
import CourseRow from "../course-row/course-row";
import {Link} from "react-router-dom";
import "./course-table.css"

export default class CourseTable extends
    React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.courses)
        return(
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th className="col-md-6">Title</th>
                            <th className="col-md-2">Owned by</th>
                            <th className="col-md-2">Last modified</th>
                            <th className="col-md-2">
                                <span className="float-right button-header">
                                    <i className="fas fa-folder"
                                       aria-hidden="true"/>
                                    <i className="fas fa-sort-alpha-up-alt"
                                       aria-hidden="true"/>
                                    <Link to="/courses/grid">
                                        <i className="fas fa-th"
                                           aria-hidden="true"/>
                                    </Link>
                                </span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.courses.map(course =>
                                                   <CourseRow
                                                       key={course._id}
                                                       deleteCourse={this.props.deleteCourse}
                                                       updateCourse={this.props.updateCourse}
                                                       course={course}
                                                       title={course.title}
                                                       lastModified={course.lastModified}
                                                       owner={course.owner}/>)
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}
