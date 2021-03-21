import React, {useState} from 'react'
import WidgetTypeDropdown from "../widget-type-dropdown/widget-type-dropdown";
import HeadingWidget from "../heading-widget/heading-widget";
import ParagraphWidget from "../paragraph-widget/paragraph-widget";

const GeneralWidget = ({widget,
                       updateWidget,
                       deleteWidget}) => {
    const [itemCache, setItemCache] = useState(widget)
    const [editing, setEditing] = useState(false)

    const updateWidgetType = (getType) =>
        setItemCache({...itemCache, type: getType})

    const updateWidgetText = (getText) =>
        setItemCache({...itemCache, text: getText})

    const updateHeadingSize = (headingSize) => {
        setItemCache({...itemCache, size: headingSize})
    }

    return (
        <div>
            {
                editing &&
                <>
                    <div className='row mb-3'>
                        <WidgetTypeDropdown
                            updateWidgetType={updateWidgetType}
                            widget={itemCache}/>
                        <span className="float-right col-2">
                        <i onClick={() => {
                            setEditing(false)
                            updateWidget(itemCache)
                        }}
                           className="float-right fa fa-check"/>
                       <i onClick={() => deleteWidget(widget)}
                          className="float-right fa fa-trash mr-1"/>
                        </span>
                    </div>
                    <div className='row'>
                        {
                            itemCache.type === "HEADING" &&
                            <HeadingWidget
                                widget={itemCache}
                                updateWidgetText={updateWidgetText}
                                updateHeadingSize={updateHeadingSize}
                                editing={editing}/>
                        }
                        {
                            itemCache.type === "PARAGRAPH" &&
                            <ParagraphWidget
                                updateWidgetText={updateWidgetText}
                                widget={itemCache}
                                editing={editing}/>
                        }
                    </div>
                </>
            }
            {
                !editing &&
                <>
                    <div className='row'>
                        <div className='col-10'>
                            {
                                itemCache.type === "HEADING" &&
                                <HeadingWidget
                                    updateWidgetText={updateWidgetText}
                                    updateHeadingSize={updateHeadingSize}
                                    widget={itemCache}
                                    editing={editing}/>
                            }
                            {
                                itemCache.type === "PARAGRAPH" &&
                                <ParagraphWidget
                                    updateWidgetText={updateWidgetText}
                                    widget={itemCache}
                                    editing={editing}/>
                            }
                        </div>
                        <div className='col-2'>
                            <i onClick={() => setEditing(true)}
                               className="float-right fa fa-cog edit-button"/>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default GeneralWidget