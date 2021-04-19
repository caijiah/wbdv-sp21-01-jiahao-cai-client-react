const QUIZZES_URL = process.env.REACT_APP_QUIZ_URL

const findAllQuizzes = () =>
    fetch(`${QUIZZES_URL}/quizzes`)
        .then(response => response.json())

const findQuizById = (qzid) =>
    fetch(`${QUIZZES_URL}/quizzes/${qzid}`)
        .then(response => response.json())

const quizApi = {
    findAllQuizzes,
    findQuizById
}

export default quizApi