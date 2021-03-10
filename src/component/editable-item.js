import React, {useState} from 'react'
import {Link} from "react-router-dom";

const EditableItem = ({item,
                      updateItem,
                      deleteItem,
                          active,
                          type,
                          moduleId,
                          to}) => {
    const [editing, setEditing] = useState(false)
    const [itemCache, setItemCache] = useState(item)
    return (
        <li className={`${type === 'module'? 'list-group-item' : 'nav-item'}
            ${(item._id === moduleId) ? 'active' : ''}
            ${editing ? 'active' : ''}`}>
            {
                !editing &&
                <>
                    <Link className={`${active? 'nav-link active':''}`} to={to}>
                        {item.title}
                    </Link>
                    <i onClick={() => setEditing(true)}
                       className="float-right fa fa-pen edit-button"/>
                </>
            }
            {
                editing &&
                <>
                    {
                        (type !== 'module') &&
                        <Link className={`${editing ? 'nav-link active' : ''}`} to={to}>
                            <input className="form-control col-8"
                                   value={itemCache.title}
                                   onChange={(e) =>
                                       setItemCache({...itemCache, title: e.target.value})}/>
                        </Link>
                    }
                    {
                        type === 'module' &&
                        <input className="form-control col-10"
                               value={itemCache.title}
                               onChange={(e) =>
                                   setItemCache({...itemCache, title: e.target.value})}/>

                    }
                    <span className="col-2">
                        <i onClick={() => {
                            setEditing(false)
                            updateItem(itemCache)
                        }}
                            className="float-right fa fa-check"/>
                        <i onClick={() => deleteItem(item)}
                           className="float-right fa fa-times"/>
                    </span>
                </>
            }
        </li>
    )
}

export default EditableItem