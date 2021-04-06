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
                           className="fas fa-check card-confirm-button"/>
                        <i onClick={() => deleteCourse(course)}
                           className="fas fa-times card-delete-button"/>
                    </span>
                }
                <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png"
                     className="card-img-top" alt="..."/>
                <div className="card-body">
                    {
                        !editing &&
                        <Link to={`/courses/grid/edit/${course._id}`}>
                            <h5 className="card-title course-title-link">{course.title}</h5>
                        </Link>
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
                    <Link to={`/courses/grid/edit/${course._id}`} className="btn btn-primary">
                        {course.title}
                    </Link>

                    <Link to={`/courses/${course._id}/quizzes`} className="mt-3 btn btn-primary">
                        Quizzes
                    </Link>

                    {
                        !editing &&
                        <i onClick={() => setEditing(true)}
                           className="fas fa-edit card-edit-button"/>
                    }

                </div>
            </div>
        </div>

    )
}

export default CourseCard