const MY_TOPICS_URL = 'http://localhost:8080/api/topics'
const MY_WIDGETS_URL = 'http://localhost:8080/api/widgets'

const createWidget = (tid, widget) =>
    fetch(`${MY_TOPICS_URL}/${tid}/widgets`, {
        method: "POST",
        body: JSON.stringify(widget),
        headers : {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const findWidgetsForTopic = (tid) =>
    fetch(`${MY_TOPICS_URL}/${tid}/widgets`)
        .then(response => response.json())

const updateWidget = (wid, widget) =>
    fetch(`${MY_WIDGETS_URL}/${wid}`, {
        method: "PUT",
        body: JSON.stringify(wid),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const deleteWidget = (wid) =>
    fetch(`${MY_WIDGETS_URL}/${wid}`, {
        method: "DELETE"
    })
        .then(response => response.json())

const widgetApi = {
    findWidgetsForTopic,
    createWidget,
    updateWidget,
    deleteWidget
}

export default widgetApi