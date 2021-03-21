import {
    CLEAR_TOPICS,
    CREATE_TOPIC,
    DELETE_TOPIC,
    FIND_TOPICS_FOR_LESSON,
    UPDATE_TOPIC
} from "../actions/topic-actions";

const initialState = {
    topics:[]
}

const topicReducer = (state= initialState, action) => {
    switch (action.type) {
        case CREATE_TOPIC:
            return {
                ...state,
                topics: [
                    ...state.topics,
                    action.topic
                ]
            }
        case DELETE_TOPIC:
            return {
                ...state,
                topics: state.topics.filter(topic => {
                    return topic._id !== action.topicToDelete._id;
                })
            }
        case UPDATE_TOPIC:
            return {
                ...state,
                topics: state.topics.map(topic => {
                    if (topic._id === action.updatedTopic._id) {
                        return action.updatedTopic
                    } else {
                        return topic
                    }
                })
            }
        case FIND_TOPICS_FOR_LESSON:
            return {
                ...state,
                topics: action.topics
            }
        case CLEAR_TOPICS:
            return {
                ...state,
                topics: []
            }
        default:
            return state
    }
}

export default topicReducer