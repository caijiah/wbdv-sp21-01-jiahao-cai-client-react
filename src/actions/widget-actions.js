import widgetService from "../services/widget-service";

export const FIND_WIDGETS_FOR_TOPIC = "FIND_WIDGETS_FOR_TOPIC"
export const CREATE_WIDGET = "CREATE_WIDGET"
export const UPDATE_WIDGET = "UPDATE_WIDGET"
export const DELETE_WIDGET = "DELETE_WIDGET"
export const CLEAR_WIDGETS = "CLEAR_WIDGETS"

const findWidgetsForTopic = (dispatch, topicId) => {
    widgetService.findWidgetsForTopic(topicId)
        .then(widgets => dispatch({
                                      type: FIND_WIDGETS_FOR_TOPIC,
                                      widgets
                                  }))
}

const createWidgetForTopic = (dispatch, topicId) => {
    widgetService.createWidget(topicId, {type: "HEADING", size: 1, text: "New Widget (default)"})
        .then(widget => dispatch({
                                     type: CREATE_WIDGET,
                                     widget
                                 }))
}

const updateWidget = (dispatch, newItem) => {
    widgetService.updateWidget(newItem.id, newItem)
        .then(status => dispatch({
                                     type: UPDATE_WIDGET,
                                     updatedWidget: newItem
                                 }))
}

const deleteWidget = (dispatch, widgetToDelete) => {
    widgetService.deleteWidget(widgetToDelete.id)
        .then(status => dispatch({
                                     type: DELETE_WIDGET,
                                     widgetToDelete
                                 }))
}

const clearWidgets = (dispatch) =>
    dispatch({type: CLEAR_WIDGETS})

const widgetActions = {
    findWidgetsForTopic,
    createWidgetForTopic,
    updateWidget,
    deleteWidget,
    clearWidgets
}

export default widgetActions