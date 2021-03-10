import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {connect} from 'react-redux'
import EditableItem from "../../editable-item";
import topicService from "../../../services/topic-service"
import "./topic-pills.css"

const TopicPills = ({topics=[],
                    findTopicsForLesson,
                    createTopicForLesson,
                    updateTopic,
                    clearTopics,
                    deleteTopic}) => {
    const {layout, courseId, moduleId, lessonId, topicId} = useParams()
    const [enableAddButton, setEnableAddButton] = useState(false)
    useEffect(()=> {
        if (moduleId !== "undefined" && typeof moduleId !== "undefined"
            &&
            lessonId !== "undefined" && typeof lessonId !== "undefined") {
            findTopicsForLesson(lessonId)
            setEnableAddButton(true)
        } else {
            setEnableAddButton(false)
            clearTopics()
        }
    },[moduleId, lessonId])
    return (
        <ul className='nav nav-pills nav-fill'>
            {
                topics.map(topic =>
                               <EditableItem
                               key={topic._id}
                               updateItem={updateTopic}
                               deleteItem={deleteTopic}
                               active={topic._id === topicId}
                               type='pills'
                               to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
                               item={topic}/>
                )
            }
            {   enableAddButton &&
                <li>
                    <i onClick={() => createTopicForLesson(lessonId)}
                       className="ml-3 fas fa-plus fa-2x addTopic-button"/>
                </li>
            }
        </ul>
    )
}

const stpm = (state) => {
    return {
        topics: state.topicReducer.topics
    }
}

const dtpm = (dispatch) => {
    return {
        findTopicsForLesson: (lessonId) => {
            topicService.findTopicsForLesson(lessonId)
                .then(topics => dispatch({
                    type: "FIND_TOPICS_FOR_LESSON",
                    topics
                }))
        },
        createTopicForLesson: (lessonId) => {
            topicService.createTopic(lessonId,
                                     {title:"New Topic"})
                .then(topic => dispatch({
                    type: "CREATE_TOPIC",
                    topic
                }))
        },
        updateTopic: (newItem) => {
            topicService.updateTopic(newItem._id, newItem)
                .then(status => dispatch({
                    type: "UPDATE_TOPIC",
                    updatedTopic: newItem
                }))
        },
        deleteTopic: (topicToDelete) => {
            topicService.deleteTopic(topicToDelete._id)
                .then(status => dispatch({
                    type: "DELETE_TOPIC",
                    topicToDelete
                }))
        },
        clearTopics: () =>
            dispatch({
                type: "CLEAR_TOPICS"
            })
    }
}
export default connect(stpm, dtpm)(TopicPills)