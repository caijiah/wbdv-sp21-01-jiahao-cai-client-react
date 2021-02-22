import React, {useState} from 'react'
import {Link} from "react-router-dom";
import "./course-row.css"

class CourseRow extends
    React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        editing : false,
        title: this.props.title,
    }
    // const [editing, setEditing] = useState(false)
    // const [title, setTitle] = useState(course.title)

    saveCourse = () => {
        this.setState({editing:false})
        const newCourse = {
            ...this.props.course,
            title: this.state.title
        }
        this.props.updateCourse(newCourse)
    }

    render() {
        return(
        <tr>
            <td>
                {
                    !this.state.editing &&
                    <Link to="/editor">
                        <i className="fas fa-file mr-2"/>
                        {this.props.title}
                    </Link>
                }
                {
                    this.state.editing &&
                    <input
                        className="form-control"
                        onChange={(e) =>
                            this.setState({title: e.target.value})}
                        value={this.state.title}/>
                }
            </td>
            <td className="d-none d-md-table-cell">{this.props.owner}</td>
            <td className="d-none d-lg-table-cell">{this.props.lastModified}</td>
            <td>
                <span className="float-right">
                    {
                        this.state.editing &&
                        <>
                            <i onClick={() => this.saveCourse()}
                               className="fas fa-check row-confirm-button"/>
                            <i onClick={() => this.props.deleteCourse(this.props.course)}
                               className="fas fa-times row-delete-button"/>
                        </>
                    }
                    {
                    !this.state.editing &&
                    <i onClick={() => this.setState({editing:true})}
                       className="fas fa-edit row-edit-button"/>
                    }
                </span>
            </td>
        </tr>)
    }
}

export default CourseRow