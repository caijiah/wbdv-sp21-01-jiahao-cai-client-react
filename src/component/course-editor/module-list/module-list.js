import React from 'react'
import {connect} from "react-redux"
import "./module-list.css"

const ModuleList = ({modules}) =>
    <ul className="list-group">
        {
            modules.map(module =>
            <li
                key={module._id}
                className="list-group-item">
                {module.title}
                <i className="float-right fa fa-trash"/>
            </li>)
        }
        <li className="list-group-item addCourse-button">
            <i className="fa fa-plus fa-2x"/>
        </li>
    </ul>

const stpm = (state) => {
    return {
        modules: state.moduleReducer.modules
    }
}

const dtpm = (dispath) => {}

export default connect(stpm, dtpm)
(ModuleList)