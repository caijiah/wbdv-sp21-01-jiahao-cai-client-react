import React, {useState} from 'react'
import {Link} from "react-router-dom";

const EditableItem = ({item,
                      updateItem,
                      deleteItem,
                          active,
                          to}) => {
    const [editing, setEditing] = useState(false)
    const [itemCache, setItemCache] = useState(item)
    return (
        <>
            {
                !editing &&
                <>
                    <Link className={`${active? 'nav-link active':''}`} to={to}>
                        {item.title}
                    </Link>
                    <i onClick={() => setEditing(true)} className="float-right fa fa-pen"/>
                </>
            }
            {
                editing &&
                <div>
                    <input className="form-control"
                           value={itemCache.title}
                        onChange={(e) =>
                            setItemCache({...itemCache, title: e.target.value})}/>
                    <span className="col-3">
                        <i onClick={() => {
                            setEditing(false)
                            updateItem(itemCache)
                        }}
                            className="float-right fa fa-check"/>
                        <i onClick={() => deleteItem(item)}
                           className="float-right fa fa-times"/>
                    </span>
                </div>
            }
        </>
    )
}

export default EditableItem