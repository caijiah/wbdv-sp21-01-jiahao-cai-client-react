import React from 'react'

const ListWidget = ({widget,
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

export default ListWidget