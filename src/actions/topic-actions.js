import topicService from "../services/topic-service";

export const FIND_TOPICS_FOR_LESSON = "FIND_TOPICS_FOR_LESSON"
export const CREATE_TOPIC = "CREATE_TOPIC"
export const UPDATE_TOPIC = "UPDATE_TOPIC"
export const DELETE_TOPIC = "DELETE_TOPIC"
export const CLEAR_TOPICS = "CLEAR_TOPICS"

const findTopicsForLesson = (dispatch, lessonId) => {
    topicService.findTopicsForLesson(lessonId)
        .then(topics => dispatch({
                                     type: FIND_TOPICS_FOR_LESSON,
                                     topics
                                 }))
}

const createTopicForLesson = (dispatch, lessonId) => {
    topicService.createTopic(lessonId,
                             {title:"New Topic"})
        .then(topic => dispatch({
                                    type: CREATE_TOPIC,
                                    topic
                                }))
}

const updateTopic = (dispatch, newItem) => {
    topicService.updateTopic(newItem._id, newItem)
        .then(status => dispatch({
                                     type: UPDATE_TOPIC,
                                     updatedTopic: newItem
                                 }))
}

const deleteTopic = (dispatch, topicToDelete) => {
    topicService.deleteTopic(topicToDelete._id)
        .then(status => dispatch({
                                     type: DELETE_TOPIC,
                                     topicToDelete
                                 }))
}

const clearTopics = (dispatch) =>
    dispatch({type: CLEAR_TOPICS})

const topicActions = {
    findTopicsForLesson,
    createTopicForLesson,
    updateTopic,
    deleteTopic,
    clearTopics
}

export default topicActions