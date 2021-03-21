import React, {useState} from 'react'

const WidgetTypeDropdown = ({widget,
                            getTypeChange}) => {
    return (
        <select value={widget.type}
                className="col-10 form-control"
                onChange={(e)=>
                    getTypeChange(e.target.value)}>
            <option value={"HEADING"}>Heading</option>
            <option value={"PARAGRAPH"}>Paragraph</option>
        </select>
    )
}

export default WidgetTypeDropdown