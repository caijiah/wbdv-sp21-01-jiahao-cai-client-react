import React from 'react'

const ImageWidget = ({widget,
                           editing,
                           updateWidgetText,
                           updateHeadingSize}) => {

    return(
        <>
            {
                editing &&
                <>
                </>
            }
            {
                !editing &&
                <>

                </>
            }
        </>
    )
}

export default ImageWidget