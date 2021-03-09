import React from 'react'

const EditableItem = ({item}) =>
    <>
        {item.title}
        <i className="float-right fa fa-trash"/>
        </>

export default EditableItem