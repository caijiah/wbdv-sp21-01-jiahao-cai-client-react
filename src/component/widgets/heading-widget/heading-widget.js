import React from 'react'
import "./heading-widget.css"

const HeadingWidget = ({widget,
                       editing,
                       updateWidgetText,
                       updateHeadingSize}) => {

    return(
        <>
            {
                editing &&
                <>
                        <input value={widget.text}
                               placeholder="Edit heading here!"
                               onChange={(e)=>
                               {
                                       updateWidgetText(e.target.value)
                               }}
                               className="form-control mb-3"/>
                        <select value={widget.size}
                                onChange={(e)=>
                                    updateHeadingSize(parseInt(e.target.value))}
                                className="form-control mb-3">
                            <option value={1}>Heading 1</option>
                            <option value={2}>Heading 2</option>
                            <option value={3}>Heading 3</option>
                            <option value={4}>Heading 4</option>
                            <option value={5}>Heading 5</option>
                            <option value={6}>Heading 6</option>
                        </select>
                </>
            }
            {
                !editing &&
                <>
                    {widget.size === 1 && <h1 className='h-break'>{widget.text}</h1>}
                    {widget.size === 2 && <h2 className='h-break'>{widget.text}</h2>}
                    {widget.size === 3 && <h3 className='h-break'>{widget.text}</h3>}
                    {widget.size === 4 && <h4 className='h-break'>{widget.text}</h4>}
                    {widget.size === 5 && <h5 className='h-break'>{widget.text}</h5>}
                    {widget.size === 6 && <h6 className='h-break'>{widget.text}</h6>}
                </>
            }
        </>
    )
}

export default HeadingWidget