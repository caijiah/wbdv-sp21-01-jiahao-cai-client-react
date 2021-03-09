const COURSES_URL = ' https://wbdv-generic-server.herokuapp.com/api/001697284/courses/'

const findModulesForCourse = (courseId) =>
    fetch(`${COURSES_URL}/${courseId}/modules`)
        .then(response => response.json())

const moduleApi = {
    findModulesForCourse
}

export default moduleApi
