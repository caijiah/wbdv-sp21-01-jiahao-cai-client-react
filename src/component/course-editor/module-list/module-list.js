import React, {useEffect} from 'react'
import {connect} from "react-redux"
import "./module-list.css"
import EditableItem from "../../editable-item";
import {useParams} from "react-router-dom";
import moduleService from "../../../services/module-service";


const ModuleList = ({modules=[],
                    createModule,
                    updateModule,
                    deleteModule,
                    findModulesForCourse}) => {
    const {layout, courseId} = useParams()
    useEffect(()=> {
        findModulesForCourse(courseId)
    }, [])
    return (
        <ul className="list-group">
            {
                modules.map(module =>
                            <li
                                key={module._id}
                                className="list-group-item">
                                <EditableItem
                                    to={`/courses/${layout}/edit/${courseId}/modules/${module._id}`}
                                    item={module}
                                    updateItem={updateModule}
                                    deleteItem={deleteModule}/>
                            </li>)
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

const dtpm = (dispath) => {
    return {
        createModule: (courseID) => {
            moduleService.createModule(courseID, {title:'New Module'})
                .then(module => dispath({
                                            type: "CREATE_MODULE",
                                            module: module
                                        }))
        },
        updateModule: (newItem) => {
            moduleService.updateModule(newItem._id, newItem)
                .then(status => dispath(
                    {
                        type: "UPDATE_MODULE",
                        updatedModule: newItem
                    }))

        },
        deleteModule: (moduleToDelete) => {
            moduleService.deleteModule(moduleToDelete._id)
                .then(status => dispath({
                                            type: "DELETE_MODULE",
                                            moduleToDelete: moduleToDelete
                }))

        },
        findModulesForCourse: (courseId) => {
            moduleService.findModulesForCourse(courseId)
                .then(modules => dispath({
                                             type: "FIND_MODULES_FOR_COURSE",
                                             modules: modules
                                         }))
        }
    }
}

export default connect(stpm, dtpm)
(ModuleList)