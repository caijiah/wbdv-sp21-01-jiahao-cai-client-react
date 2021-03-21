import {
    CREATE_MODULE,
    DELETE_MODULE,
    FIND_MODULES_FOR_COURSE,
    UPDATE_MODULE
} from "../actions/module-actions";

const initialState = {
    modules:[]
}

const moduleReducer = (state= initialState, action) => {
    switch (action.type) {
        case CREATE_MODULE:
            return {
                ...state,
                modules: [
                    ...state.modules,
                    action.module
                ]
            }
        case DELETE_MODULE:
            return {
                ...state,
                modules: state.modules.filter(module => {
                    return module._id !== action.moduleToDelete._id;
                })
            }
        case UPDATE_MODULE:
            return {
                ...state,
                modules: state.modules.map(module => {
                    if (module._id === action.updatedModule._id) {
                        return action.updatedModule
                    } else {
                        return module
                    }
                })
            }
        case FIND_MODULES_FOR_COURSE:
            return {
                ...state,
                modules: action.modules
            }
        default:
            return state
    }
}

export default moduleReducer