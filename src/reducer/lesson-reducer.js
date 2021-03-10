const initialState = {
    lessons: []
}

const lessonReducer = (state= initialState, action) => {
    switch (action.type) {
        case "FIND_LESSONS_FOR_MODULE":
            return {
                ...state,
                lessons: action.lessons
            }
        case "CREATE_LESSON":
            return {
                ...state,
                lessons: [
                    ...state.lessons,
                    action.lesson
                    ]
            }
        case "DELETE_LESSON":
            return {
                ...state,
                lessons: state.lessons.filter(lesson => {
                    return lesson._id !== action.lessonToDelete._id;
                })
            }
        case "UPDATE_LESSON":
            return {
                ...state,
                lessons: state.lessons.map(lesson => {
                    if (lesson._id === action.updatedLesson._id) {
                        return action.updatedLesson
                    } else {
                        return lesson
                    }
                })
            }
        case "CLEAR_LESSON":
            return {
                ...state,
                lessons: []
            }
        default:
            return state
    }
}

export default lessonReducer