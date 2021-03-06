const WIDGET_URL = process.env.REACT_APP_WIDGET_URL
// This is only for A6, since we will be tested on locally
// I made this easier for TAs, need to change it back
// const WIDGET_URL = 'http://localhost:8080/api'
const MY_TOPICS_URL = `${WIDGET_URL}/topics`
const MY_WIDGETS_URL = `${WIDGET_URL}/widgets`

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
        body: JSON.stringify(widget),
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