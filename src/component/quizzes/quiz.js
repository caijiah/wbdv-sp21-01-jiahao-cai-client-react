import React, {useState, useEffect} from "react"
import {useParams} from 'react-router-dom'
import questionApi from "../../services/questions-service";
import Question from "./questions/question";

const Quiz = () => {
    const {courseId, quizId} = useParams()
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        questionApi.findQuestionsForQuiz(quizId)
            .then((questions) => setQuestions(questions))
    }, [])

    return (
        <div className="container-fluid">
            <h2>Quiz</h2>
            <ul>
            {
                questions.map(question => {
                    return (
                        <li key={question._id} className="list-group">
                            <Question question={question}/>
                        </li>
                    )
                })
            }
            </ul>
        </div>
    )
}

export default Quiz