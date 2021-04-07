import React, {useState, useEffect} from "react"
import {useParams} from 'react-router-dom'
import questionApi from "../../services/questions-service";
import Question from "./questions/question";
import quizApi from "../../services/quizzes-service";
import './quiz.css'

const Quiz = () => {
    const {courseId, quizId} = useParams()
    const [questions, setQuestions] = useState([])
    const [quizName, setQuizName] = useState("")

    useEffect(() => {
        questionApi.findQuestionsForQuiz(quizId)
            .then((questions) => setQuestions(questions))
        quizApi.findQuizById(quizId)
            .then((quiz) => setQuizName(quiz.title))
    }, [quizId])

    return (
        <div className="container-fluid">
            <h2>{quizName}</h2>
            <ul className='question-list'>
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