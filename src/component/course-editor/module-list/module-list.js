import React from 'react'
import {connect} from "react-redux"

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
        {/*<li className="list-group-item active">*/}
        {/*    Module 1 - JQuery*/}
        {/*    <i className="pull-right fa fa-trash"/>*/}
        {/*</li>*/}

    </ul>

const stpm = (state) => {
    return {
        modules: state.moduleReducer.modules
    }
}

const dtpm = (dispath) => {}

export default connect(stpm, dtpm)
(ModuleList)