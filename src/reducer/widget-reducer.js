import {
    CLEAR_WIDGETS,
    CREATE_WIDGET,
    DELETE_WIDGET,
    FIND_WIDGETS_FOR_TOPIC,
    UPDATE_WIDGET
} from "../actions/widget-actions";

const initialState = {
    widgets:[]
}

const widgetReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_WIDGET:
            return {
                ...state,
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
            }
        case DELETE_WIDGET:
            return {
                ...state,
                widgets: state.widgets.filter(widget => {
                    return widget.id !== action.widgetToDelete.id
                })
            }
        case UPDATE_WIDGET:
            return {
                ...state,
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.updatedWidget.id) {
                        return action.updatedWidget
                    } else {
                        return widget
                    }
                })
            }
        case FIND_WIDGETS_FOR_TOPIC:
            return {
                ...state,
                widgets: action.widgets
            }
        case CLEAR_WIDGETS:
            return {
                ...state,
                widgets: []
            }
        default:
            return state
    }
}

export default widgetReducer