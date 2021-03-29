import React from 'react'

const ImageWidget = ({widget,
                     editing,
                     updateWidgetWidth,
                     updateWidgetHeight,
                     updateWidgetSrc}) => {
    return(
        <>
            {
                editing &&
                <>
                    Image URL
                    <input value={widget.src}
                           type="url"
                           onChange={(e)=> {
                               updateWidgetSrc(e.target.value)
                           }}
                           className="form-control"/>
                    Image width
                    <input value={widget.width}
                           type="number"
                           onChange={(e)=> {
                               updateWidgetWidth(e.target.value)
                           }}
                           className="form-control"/>
                    Image height
                    <input value={widget.height}
                           type="number"
                           onChange={(e)=> {
                               updateWidgetHeight(e.target.value)
                           }}
                           className="form-control"/>
                </>
            }
            {
                !editing &&
                <img width={widget.width} height={widget.height} src={widget.src}
                     alt={widget.name}/>
            }
        </>
    )
}

export default ImageWidget