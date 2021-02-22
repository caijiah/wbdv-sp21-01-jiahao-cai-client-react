const COURSES_URL = "https://wbdv-generic-server.herokuapp.com/api/001697284/courses";

const findAllCourses = () =>
    fetch(COURSES_URL)
        .then(response => response.json())

const findCourseById = (id) =>
    fetch(`${COURSES_URL}/${id}`)
        .then(response => response.json())

const deleteCourse = (courseId) =>
    fetch(`${COURSES_URL}/${courseId}`, {
        method:'DELETE'
    })
        .then(response => response.json())

const createCourse = (course) =>
    fetch(COURSES_URL, {
        method:'POST',
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const updateCourse = (courseId, course) =>
    fetch(`${COURSES_URL}/${courseId}`, {
        method: 'PUT',
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())


const api = {
    findAllCourses: findAllCourses,
    findCourseById,
    deleteCourse: deleteCourse,
    createCourse,
    updateCourse
}

export default api;