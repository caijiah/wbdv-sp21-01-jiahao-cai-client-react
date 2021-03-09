const COURSES_URL = ' https://wbdv-generic-server.herokuapp.com/api/001697284/courses'

const findModulesForCourse = (courseId) =>
    fetch(`${COURSES_URL}/${courseId}/modules`)
        .then(response => response.json())

const createModule = (courseId, module) =>
    fetch(`${COURSES_URL}/${courseId}/modules`, {
        method:"POST",
        body: JSON.stringify(module),
        headers : {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const moduleApi = {
    findModulesForCourse,
    createModule
}

export default moduleApi
