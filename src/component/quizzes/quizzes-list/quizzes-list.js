import React, {useState, useEffect} from "react";
import quizApi from "../../../services/quizzes-service";
import {Link, useParams} from "react-router-dom";
import './quizzes-list.css'

const QuizzesList = () => {
    const {courseId} = useParams();
    const [quizzes, setQuizzes] = useState([])
    useEffect(() => {
        quizApi.findAllQuizzes()
            .then((quizzes) => {
                setQuizzes(quizzes)})
    }, [])
    return (
        <div className="container-fluid">
            <h2>Quizzes</h2>
            <ul className='quizzes-list'>
            {
                quizzes.map((quiz) => {
                    return(
                        <li className='list-group'
                            key={quiz._id}>
                            <div className='list-group-item'>
                                <Link
                                    to={`/courses/${courseId}/quizzes/${quiz._id}`}>
                                    {quiz.title}
                                </Link>
                                <Link to={`/courses/${courseId}/quizzes/${quiz._id}`}
                                      className="btn btn-primary float-right">
                                    Start
                                </Link>
                            </div>
                        </li>
                    )
                })
            }
            </ul>
        </div>
    )
}

export default QuizzesList