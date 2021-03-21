import React from 'react'

const ParagraphWidget = ({widget,
                         editing,
                         updateWidgetText}) => {
    return(
        <>
            {
                editing &&
                <>
                    <textarea value={widget.text}
                    className="form-control col-10"
                    onChange={(e) =>
                        updateWidgetText(e.target.value)}/>
                </>
            }
            {
                !editing &&
                    <p>
                        {widget.text}
                    </p>

            }
        </>
    )
}

export default ParagraphWidget