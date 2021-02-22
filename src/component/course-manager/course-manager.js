import React from "react";
import api from "../../services/course-service";
import {Link, Route} from "react-router-dom";
import CourseTable from "../course-table/course-table";
import CourseGrid from "../course-grid/course-grid";
import "./course-manager.css"

export default class CourseManager
    extends React.Component {
    state = {
        courses: [],
        newCourseTitle: ""
    }

    componentDidMount() {
        api.findAllCourses()
            .then(courses => {
                courses.map(c => {
                    c.lastModified = this.convertDate(c["_updatedAt"])
                })
                this.setState({courses})
            })
    }

    findCourseById = (_id) => {
        api.findCourseById(_id)
            .then(course => {
                console.log(course)
            })
    }

    convertDate = (orinDate) =>
        new Date(orinDate).toLocaleDateString("en-US")

    updateCourse = (course) => {
        console.log(course)
        api.updateCourse(course._id, course)
            .then(status => {
                this.setState((prevState) => {
                    let nextState = {...prevState}
                    nextState.courses = prevState.courses.map(c => {
                        if(c._id === course._id) {
                            course.lastModified = new Date().toLocaleDateString("en-US")
                            return course
                        } else {
                            return c
                        }
                    })
                    return nextState
                })
            })
    }

    deleteCourse = (course) => {
        api.deleteCourse(course._id)
            .then(status => {
                this.setState((prevState) => ({
                    courses: prevState.courses.filter(c => c._id !== course._id)
                }))
            })
    }

    addCourse = () => {
        const newCourse = {
            owner: "me",
        }
        if (this.state.newCourseTitle === '') {
            newCourse.title = "Default New Course Title"
        } else {
            newCourse.title = this.state.newCourseTitle
        }
        api.createCourse(newCourse)
            .then(actualCourse => {
                // console.log(actualCourse)
                actualCourse.lastModified = this.convertDate(actualCourse["_updatedAt"])
                this.state.courses.push(actualCourse)
                this.setState({newCourseTitle: ''})
                this.setState(this.state)
            })
    }

    render() {
        return (
            <div>
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
                                   placeholder="New Course Title"
                                   value={this.state.newCourseTitle}
                            onChange={(e) =>
                                this.setState({newCourseTitle : e.target.value})}/>
                        </div>
                        <div className="col-lg-1 col plus-button">
                            <span className="fa-stack fa-sm"
                                  onClick={() => this.addCourse()}>
                                <i className="fa fa-circle fa-stack-2x"/>
                                <i className="fa fa fa-plus fa-stack-1x"/>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="course-table">
                    <Route path="/courses/table" exact={true} >
                        <CourseTable
                            updateCourse={this.updateCourse}
                            deleteCourse={this.deleteCourse}
                            courses={this.state.courses}/>
                    </Route>
                </div>
                <div className="course-grid">
                    <Route path="/courses/grid" exact={true} >
                        <CourseGrid
                            courses={this.state.courses}
                            updateCourse={this.updateCourse}
                            deleteCourse={this.deleteCourse}/>
                    </Route>
                </div>
                <div className="sticky-button">
                    <span className="fa-stack fa-2x"
                          onClick={() => this.addCourse()}>
                                <i className="fa fa-circle fa-stack-2x"/>
                                <i className="fa fa fa-plus fa-stack-1x"/>
                            </span>
                    {/*<i className="fa fa-plus-circle fa-3x"*/}
                    {/*   aria-hidden="true"*/}
                    {/*onClick={()=>this.addCourse()}/>*/}
                </div>
            </div>


        )
    }
}