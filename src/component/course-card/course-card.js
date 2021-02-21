import React, {useState} from 'react'
import {Link} from "react-router-dom";
import "./course-card.css"

const CourseCard = (
    {
        course,
        deleteCourse,
        updateCourse}) => {
    const [editing, setEditing] = useState(false)
    const [title, setTitle] = useState(course.title)

    const saveCourse = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: title
        }
        updateCourse(newCourse)
    }

    return (
        <div className="col mb-4">
            <div className="card h-100">
                {
                    editing&&
                    <span className="top-right-buttons">
                        <i onClick={() => saveCourse()}
                           className="fas fa-check confirm-button"/>
                        <i onClick={() => deleteCourse(course)}
                           className="fas fa-times delete-button"/>
                    </span>
                }
                <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png"
                     className="card-img-top" alt="..."/>
                <div className="card-body">
                    {
                        !editing &&
                        <h5 className="card-title">{course.title}</h5>
                    }

                    {
                        editing &&
                        <input
                            className="form-control"
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}/>
                    }
                    <p className="card-text">
                        Some description.</p>
                    <Link to="/editor" className="btn btn-primary">
                        {course.title}
                    </Link>

                    {
                        !editing &&
                        <i onClick={() => setEditing(true)}
                           className="fas fa-edit edit-button"/>
                    }

                </div>
            </div>
        </div>

    )
}

export default CourseCard