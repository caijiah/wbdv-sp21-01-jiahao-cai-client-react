// const WIDGET_URL = process.env.REACT_APP_WIDGET_URL
// This is for A7, since we will be tested on locally
// I made this easier for TAs, need to change it back
const QUIZZES_URL = 'http://localhost:3000/api/quizzes';

const findQuestionsForQuiz = (qzid) =>
    fetch(`${QUIZZES_URL}/${qzid}/questions`)
        .then(response => response.json())


const questionApi = {
    findQuestionsForQuiz
}

export default questionApi