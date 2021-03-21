import React, {useEffect} from 'react'
import {connect} from "react-redux"
import "./module-list.css"
import EditableItem from "../../editable-item";
import {useParams} from "react-router-dom";
import moduleService from "../../../services/module-service";
import moduleActions from "../../../actions/module-actions";


const ModuleList = ({modules=[],
                    createModule,
                    updateModule,
                    deleteModule,
                    findModulesForCourse}) => {
    const {layout, courseId, moduleId} = useParams()
    useEffect(()=> {
        findModulesForCourse(courseId)
    }, [])
    return (
        <ul className="list-group">
            {
                modules.map(module =>
                                <EditableItem
                                    moduleId={`${moduleId ===module._id ? module._id : ''}`}
                                    key={module._id}
                                    type={"module"}
                                    to={`/courses/${layout}/edit/${courseId}/modules/${module._id}`}
                                    item={module}
                                    updateItem={updateModule}
                                    deleteItem={deleteModule}/>
                            )
            }
            <li className="list-group-item addCourse-button">
                <i onClick={() => createModule(courseId)} className="fa fa-plus fa-2x"/>
            </li>
        </ul>)
}

const stpm = (state) => {
    return {
        modules: state.moduleReducer.modules
    }
}

const dtpm = (dispatch) => {
    return {
        createModule: (courseID) => moduleActions.createModule(dispatch, courseID),
        updateModule: (newItem) => moduleActions.updateModule(dispatch, newItem),
        deleteModule: (moduleToDelete) => moduleActions.deleteModule(dispatch, moduleToDelete),
        findModulesForCourse: (courseId) => moduleActions.findModulesForCourse(dispatch, courseId)
    }
}

export default connect(stpm, dtpm)
(ModuleList)