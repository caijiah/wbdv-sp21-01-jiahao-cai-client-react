// const WIDGET_URL = process.env.REACT_APP_WIDGET_URL
// This is for A7, since we will be tested on locally
// I made this easier for TAs, need to change it back
const QUIZZES_URL = 'http://localhost:3000/api/quizzes';

const findAllQuizzes = () =>
    fetch(QUIZZES_URL)
        .then(response => response.json())

const findQuizById = (qzid) =>
    fetch(`${QUIZZES_URL}/${qzid}`)
        .then(response => response.json())

const quizApi = {
    findAllQuizzes,
    findQuizById
}

export default quizApi