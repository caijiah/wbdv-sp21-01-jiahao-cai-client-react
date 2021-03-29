import React from 'react'
import "./list-widget.css"

const ListWidget = ({widget,
                    editing,
                    updateWidgetOrdered,
                    updateWidgetText
                    }) => {

    return(
        <>
            {
                editing &&
                <>
                    <input checked={widget.ordered}
                           id = {widget.id}
                           onChange={(e)=> {
                               updateWidgetOrdered()
                           }}
                           type="checkbox"/>
                           <label
                               htmlFor = {widget.id}
                               className = "ml-1"
                           > Ordered</label>
                    <br/>
                    Item list
                    <textarea value={widget.text}
                              onChange={(e)=> {
                                  updateWidgetText(e.target.value)
                              }}
                              rows={10} className="form-control"/>
                </>
            }
            {
                !editing &&
                <>
                    {
                        widget.ordered &&
                        <ol>
                            {
                                widget.text.split("\n").map((item, index) => {
                                    return(
                                        <li
                                            className="li-break"
                                            key={index}>
                                            {item}
                                        </li>
                                    )
                                })
                            }
                        </ol>
                    }
                    {
                        !widget.ordered &&
                        <ul>
                            {
                                widget.text.split("\n").map((item, index) => {
                                    return(
                                        <li className="li-break"
                                            key={index}>
                                            {item}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    }
                </>
            }
        </>
    )
}

export default ListWidget