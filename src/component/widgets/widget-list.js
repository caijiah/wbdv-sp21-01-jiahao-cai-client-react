import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {connect} from 'react-redux'
import './widget-list.css'
import GeneralWidget from "./general-widget/general-widget";
import widgetActions from "../../actions/widget-actions";

const WidgetList = ({widgets=[],
                    findWidgetsForTopic,
                    createWidgetForTopic,
                    updateWidget,
                    deleteWidget,
                    clearWidgets}) => {
    const {moduleId, lessonId, topicId} = useParams()
    const [enableAddButton, setEnableAddButton] = useState(false)
    useEffect(()=> {
        if (moduleId !== "undefined" && typeof moduleId !== "undefined"
            &&
            lessonId !== "undefined" && typeof lessonId !== "undefined"
            &&
            topicId !== "undefined" && typeof topicId !== "undefined") {
            findWidgetsForTopic(topicId)
            setEnableAddButton(true)
        } else {
            setEnableAddButton(false)
            clearWidgets()
        }
    },[moduleId, lessonId, topicId])
    return (
        <div>
            {   enableAddButton &&
                <div className='row'>
                    <h3 className='col'>Widget List</h3>
                    <div className='col mb-3 mt-2'>
                        <i onClick={() => createWidgetForTopic(topicId)}
                           className="ml-3 fas fa-plus fa-2x float-right addTopic-button"/>
                    </div>
                </div>
            }
            {   (topicId === "undefined" || typeof topicId === "undefined") &&
                <h4>
                    Please select a Topic to check widgets.
                </h4>
            }
            <ul className="list-group">
                {
                    widgets.map(widget =>
                                    <li className="list-group-item" key={widget.id}>
                                        <GeneralWidget
                                            widget={widget}
                                            updateWidget={updateWidget}
                                            deleteWidget={deleteWidget}/>
                                    </li>
                    )
                }
            </ul>
        </div>
    )
}

const stpm = (state) => {
    return {
        widgets: state.widgetReducer.widgets
    }
}

const dtpm = (dispatch) => {
    return {
        findWidgetsForTopic: (topicId) => widgetActions.findWidgetsForTopic(dispatch, topicId),
        createWidgetForTopic: (topicId) => widgetActions.createWidgetForTopic(dispatch, topicId),
        updateWidget: (newItem) => widgetActions.updateWidget(dispatch, newItem),
        deleteWidget: (widgetToDelete) => widgetActions.deleteWidget(dispatch, widgetToDelete),
        clearWidgets: () => widgetActions.clearWidgets(dispatch)
    }
}

export default connect(stpm, dtpm)(WidgetList)