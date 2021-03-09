import React, {useEffect} from 'react'
import {connect} from "react-redux"
import "./module-list.css"
import EditableItem from "../../editable-item";
import {useParams} from "react-router-dom";
import moduleApi from "../../../services/module-service";


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
                <i onClick={createModule} className="fa fa-plus fa-2x"/>
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
        createModule: () => {
            dispath({type: "CREATE_MODULE"})
        },
        updateModule: (newItem) => {
            dispath(
                {
                    type: "UPDATE_MODULE",
                    updatedModule: newItem
                })
        },
        deleteModule: (moduleToDelete) => {
            dispath(
                {
                    type: "DELETE_MODULE",
                    moduleToDelete: moduleToDelete
                })
        },
        findModulesForCourse: (courseId) => {
            moduleApi.findModulesForCourse(courseId)
                .then(modules => dispath({
                                             type: "FIND_MODULES_FOR_COURSE",
                                             modules: modules
                                         }))
        }
    }
}

export default connect(stpm, dtpm)
(ModuleList)