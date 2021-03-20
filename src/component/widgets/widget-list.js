import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {connect} from 'react-redux'
import widgetService from '../../services/widget-service'

const WidgetList = ({widgets=[],
                    findWidgetsForTopic,
                    createWidgetForTopic,
                    updateWidget,
                    deleteWidget,
                    clearWidgets}) => {
    const {layout, courseId, moduleId, lessonId, topicId} = useParams()
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
                <div className='col'>
                    <i onClick={() => createWidgetForTopic(lessonId)}
                       className="ml-3 fas fa-plus fa-2x float-right addTopic-button"/>
                </div>
            }
            {   (topicId === "undefined" || typeof topicId === "undefined") &&
                <h4>
                    Please select a Topic to check widgets.
                </h4>
            }
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
        findWidgetsForTopic: (topicId) => {
            widgetService.findWidgetsForTopic(topicId)
                .then(widgets => dispatch({
                    type: "FIND_WIDGETS_FOR_TOPIC",
                    widgets
                }))
        },
        createWidgetForTopic: (topicId) => {
            widgetService.createWidgetForTopic(topicId,
                                           {
                                               type: "HEADING",
                                               size: 1,
                                               text: "New Widget"
                                           })
                .then(widget => dispatch({
                    type: "CREATE_WIDGET",
                    widget
                }))
        },
        updateWidget: (newItem) => {
            widgetService.updateWidget(newItem.id, newItem)
                .then(status => dispatch({
                    type: "UPDATE_WIDGET",
                    updatedWidget: newItem
                }))
        },
        deleteWidget: (widgetToDelete) => {
            widgetService.deleteWidget(widgetToDelete.id)
                .then(status => dispatch({
                    type: "DELETE_WIDGET",
                    widgetToDelete
                }))
        },
        clearWidgets: () =>
            dispatch({
                type: "CLEAR_WIDGETS"
            })
    }
}

export default connect(stpm, dtpm)(WidgetList)