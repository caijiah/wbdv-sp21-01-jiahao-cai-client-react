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
            <td>{this.props.owner}</td>
            <td>{this.props.lastModified}</td>
            <td>
                <span className="float-right">
                    {
                        this.state.editing &&
                        <>
                            <i onClick={() => this.saveCourse()}
                               className="fas fa-check confirm-button"/>
                            <i onClick={() => this.props.deleteCourse(this.props.course)}
                               className="fas fa-times delete-button"/>
                        </>
                    }
                    {
                    !this.state.editing &&
                    <i onClick={() => this.setState({editing:true})}
                       className="fas fa-edit edit-button"/>
                    }
                </span>
            </td>
        </tr>)
    }



}
//     }
//     {
//     course,
//     deleteCourse,
//     updateCourse
//     })=> {
//     const [editing, setEditing] = useState(false)
//     const [title, setTitle] = useState(course.title)
//
//     const saveCourse = () => {
//         setEditing(false)
//         const newCourse = {
//             ...course,
//             title: title
//         }
//         updateCourse(newCourse)
//     }
//
//     return(
//         <tr>
//             <td>
//                 {
//                     !editing &&
//                     <Link to="/editor">
//                         <i className="fas fa-file mr-2"></i>
//                         {course.title}
//                     </Link>
//                 }
//                 {
//                     editing &&
//                     <input
//                         className="form-control"
//                         onChange={(e) => setTitle(e.target.value)}
//                         value={title}/>
//                 }
//             </td>
//             <td>{course.owner}</td>
//             <td>{course.lastModified}</td>
//             <td>
//                 <span className="float-right">
//                     {
//                         editing &&
//                         <>
//                             <i onClick={() => saveCourse()}
//                                className="fas fa-check confirm-button"/>
//                             <i onClick={() => deleteCourse(course)}
//                                className="fas fa-times delete-button"/>
//                         </>
//                     }
//                 {
//                     !editing &&
//                     <i onClick={() => setEditing(true)} className="fas fa-edit edit-button"></i>
//                 }
//                 </span>
//             </td>
//         </tr>)
// }

export default CourseRow