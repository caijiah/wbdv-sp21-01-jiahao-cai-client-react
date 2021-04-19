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
    const [submitted, setSubmitted] = useState(false)
    const [attempts, setAttempts] = useState([])
    const [curAttempt, setCurAttempt] = useState(null)
    const [curAttemptIndex, setCurAttemptIndex] = useState(null)

    useEffect(() => {
        questionApi.findQuestionsForQuiz(quizId)
            .then((questions) => {
                setQuestions(questions)
                console.log(questions)
            })
        quizApi.findQuizById(quizId)
            .then((quiz) => setQuizName(quiz.title))
        quizApi.findAttemptsForQuiz(quizId)
            .then((attempts) => {
                console.log(attempts)
                setAttempts(attempts)
            })
    }, [quizId])

    useEffect(()=> {
        if (submitted) {
            // console.log(curAttempt.answers)
            setQuestions(questions => curAttempt.answers)
            attempts.map((att, index) => {
                if (att._id === curAttempt._id) {
                    setCurAttemptIndex(index + 1)
                }
            })
        }
    }, [curAttempt, attempts])

    const handleSubmit = () => {
        let allHaveAnswer = true
        // check if all questions have an answer
        questions.forEach((question) => {
            // console.log(question.answer)
            if (question.answer) {
                allHaveAnswer = allHaveAnswer && true
            } else {
                allHaveAnswer = allHaveAnswer && false
            }
        })
        if (allHaveAnswer) {
            // console.log(allHaveAnswer)
            quizApi.createAttemptForQuiz(quizId, questions)
                .then(newAttempt => {
                    setCurAttempt(curAttempt => newAttempt)
                    setSubmitted(true)
                    setAttempts([...attempts, newAttempt])
                })
        } else {
            alert("You have to choose answers for all questions!")
        }

    }

    const handleCheckAttempts = (index) => {
        setCurAttempt(curAttempt => attempts[index])
        setCurAttemptIndex(index + 1)
        setSubmitted(true)
    }

    return (
        <div className="container-fluid">

            <h2>{quizName}</h2>
            {
                submitted && curAttempt !== null &&
                <h3> Attempt {curAttemptIndex} : Score: {parseFloat(curAttempt.score.toFixed(2))}/100</h3>
            }
            <div className='row'>
                <div className='col-8'>
                    <ul className= 'question-list'>
                    {
                        questions.map(question => {
                            return (
                                <li key={question._id} className="list-group">
                                    <Question question={question}
                                        submitted={submitted}
                                        currentAttempt={curAttempt}/>
                                </li>
                            )
                        })
                    }
                    </ul>
                    <br/>
                    <button className='btn btn-success'
                            disabled={submitted}
                            onClick={handleSubmit}>Submit</button>
                    </div>
                <div className='col-4'>
                    <h2>Attempts:</h2>
                    <ul>
                        {
                            attempts.length === 0 &&
                            <li>No attempts yet. Please submit.</li>
                        }
                        {
                            attempts.map((attempt, index) => {
                                return (
                                    <li key={index}>
                                        <div className={`attempt-entry 
                                        ${index + 1 === curAttemptIndex ? "attempt-entry-highlight" : ""}`}
                                            onClick={() => {handleCheckAttempts(index)}}>
                                            Attempt {index + 1}  : Score: {parseFloat(attempt.score.toFixed(2))}/100
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <br/>
                    <button className='btn btn-success'
                            onClick={()=>window.location.reload()}>New Attempt</button>
                </div>
            </div>
        </div>
    )
}

export default Quiz