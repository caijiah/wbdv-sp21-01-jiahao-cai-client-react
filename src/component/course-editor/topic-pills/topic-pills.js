import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {connect} from 'react-redux'
import EditableItem from "../../editable-item";
import topicService from "../../../services/topic-service"
import "./topic-pills.css"
import topicActions from "../../../actions/topic-actions";

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
            {   (lessonId === "undefined" || typeof lessonId === "undefined") &&
                <h4>
                    Please select a Lesson to check topics.
                </h4>
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
        findTopicsForLesson: (lessonId) => topicActions.findTopicsForLesson(dispatch, lessonId),
        createTopicForLesson: (lessonId) => topicActions.createTopicForLesson(dispatch, lessonId),
        updateTopic: (newItem) => topicActions.updateTopic(dispatch, newItem),
        deleteTopic: (topicToDelete) => topicActions.deleteTopic(dispatch, topicToDelete),
        clearTopics: () => topicActions.clearTopics(dispatch)
    }
}

export default connect(stpm, dtpm)(TopicPills)