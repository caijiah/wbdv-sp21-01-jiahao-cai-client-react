const initialState = {
    widgets:[]
}

const widgetReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_WIDGET":
        case "DELETE_WIDGET":
        case "UPDATE_WIDGET":
        case "FIND_WIDGETS_FOR_TOPIC":
        case "CLEAR_WIDGETS":
            return {
                ...state,
                widgets: []
            }
        default:
            return state
    }
}

export default widgetReducer