const QUIZZES_URL = process.env.REACT_APP_QUIZ_URL

const findAllQuizzes = () =>
    fetch(`${QUIZZES_URL}/quizzes`)
        .then(response => response.json())

const findQuizById = (qzid) =>
    fetch(`${QUIZZES_URL}/quizzes/${qzid}`)
        .then(response => response.json())

const createAttemptForQuiz = (qzid, questions) =>
    fetch(`${QUIZZES_URL}/quizzes/${qzid}/attempts`, {
        method: "POST",
        body: JSON.stringify(questions),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

const findAttemptsForQuiz = (qzid) =>
    fetch(`${QUIZZES_URL}/quizzes/${qzid}/attempts`
    ).then(response => response.json())

const quizApi = {
    findAllQuizzes,
    findQuizById,
    createAttemptForQuiz,
    findAttemptsForQuiz
}

export default quizApi