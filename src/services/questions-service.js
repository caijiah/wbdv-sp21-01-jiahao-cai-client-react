const QUIZZES_URL = process.env.REACT_APP_QUIZ_URL

const findQuestionsForQuiz = (qzid) =>
    fetch(`${QUIZZES_URL}/quizzes/${qzid}/questions`)
        .then(response => response.json())


const questionApi = {
    findQuestionsForQuiz
}

export default questionApi