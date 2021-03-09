const MODULES_URL = "https://wbdv-generic-server.herokuapp.com/api/001697284/modules";
const LESSONS_URL = "https://wbdv-generic-server.herokuapp.com/api/001697284/lessons"

const findLessonsForModule = (moduleId) =>
    fetch(`${MODULES_URL}/${moduleId}/lessons`)
        .then(response => response.json())

const createLesson = (moduleId, lesson) =>
    fetch(`${MODULES_URL}/${moduleId}/lessons`,{
        method: "POST",
        body: JSON.stringify(lesson),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const deleteLesson = (lessonId) =>
    fetch(`${LESSONS_URL}/${lessonId}`,{
        method: "DELETE"
    })
        .then(response => response.json())

const api = {
    findLessonsForModule,
    createLesson,
    deleteLesson
}

export default api