import React from 'react'
import "./paragraph-widget.css"

const ParagraphWidget = ({widget,
                         editing,
                         updateWidgetText}) => {
    return(
        <>
            {
                editing &&
                    <textarea value={widget.text}
                              className="form-control"
                              rows={8}
                              onChange={(e) =>
                                  updateWidgetText(e.target.value)}/>
            }
            {
                !editing &&
                    <p className="para-break">
                        {widget.text}
                    </p>

            }
        </>
    )
}

export default ParagraphWidget