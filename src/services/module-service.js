const COURSES_URL = ' https://wbdv-generic-server.herokuapp.com/api/001697284/courses'
const MODULES_URL = ' https://wbdv-generic-server.herokuapp.com/api/001697284/modules'

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

const deleteModule = (moduleId) =>
    fetch(`${MODULES_URL}/${moduleId}`, {
        method:"DELETE",
        headers : {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const updateModule = (moduleId, module) =>
    fetch(`${MODULES_URL}/${moduleId}`, {
        method:"PUT",
        body: JSON.stringify(module),
        headers : {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const moduleApi = {
    findModulesForCourse,
    createModule,
    deleteModule,
    updateModule
}

export default moduleApi
