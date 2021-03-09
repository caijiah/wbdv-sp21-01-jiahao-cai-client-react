import React, {useState} from 'react'
import {Link} from "react-router-dom";

const EditableItem = ({item}) => {
    const [edited, setEdited] = useState(false)
    return (
        <>
            <>
            </>
            <Link to="/">
                {item.title}
            </Link>
            <input className="form-control"/>
            <i className="float-right fa fa-check"/>
            <i className="float-right fa fa-times"/>
            <i className="float-right fa fa-pen"/>
        </>
    )
}
export default EditableItem