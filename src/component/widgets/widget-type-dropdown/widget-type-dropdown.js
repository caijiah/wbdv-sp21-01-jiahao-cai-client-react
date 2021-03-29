import React from 'react'

const WidgetTypeDropdown = ({widget,
                            updateWidgetType}) => {
    return (
        <select value={widget.type}
                className="form-control"
                onChange={(e)=>
                    updateWidgetType(e.target.value)}>
            <option value={"HEADING"}>Heading</option>
            <option value={"PARAGRAPH"}>Paragraph</option>
            <option value={"IMAGE"}>Image</option>
            <option value={"LIST"}>List</option>
        </select>
    )
}

export default WidgetTypeDropdown