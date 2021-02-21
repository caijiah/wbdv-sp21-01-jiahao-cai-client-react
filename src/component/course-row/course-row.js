import React, {useState} from 'react'
import {Link} from "react-router-dom";
import "./course-row.css"

const CourseRow = (
    {
    course,
    deleteCourse,
    updateCourse
    })=> {
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

    return(
        <tr>
            <td>
                {
                    !editing &&
                    <Link to="/editor">
                        <i className="fas fa-file mr-2"></i>
                        {course.title}
                    </Link>
                }
                {
                    editing &&
                    <input
                        className="form-control"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}/>
                }
            </td>
            <td>{course.owner}</td>
            <td>{course.lastModified}</td>
            <td>
                <span className="float-right">
                    {
                        editing &&
                        <>
                            <i onClick={() => saveCourse()}
                               className="fas fa-check confirm-button"/>
                            <i onClick={() => deleteCourse(course)}
                               className="fas fa-times delete-button"/>
                        </>
                    }
                {
                    !editing &&
                    <i onClick={() => setEditing(true)} className="fas fa-edit edit-button"></i>
                }
                </span>
            </td>
        </tr>)
}

export default CourseRow