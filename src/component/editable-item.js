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

                    { type === 'module' &&
                      <div className='row'>
                          <Link className={`col-10 ${active? 'nav-link active':''}`} to={to}>
                            {item.title}
                          </Link>
                          <i onClick={() => setEditing(true)}
                             className="col-2 pull-right fa fa-pen edit-button"/>
                     </div>
                    }
                    {
                        type !== 'module' &&
                        <>
                            <Link className={`${active? 'nav-link active':''}`} to={to}>
                                {item.title}
                                <i onClick={() => setEditing(true)}
                                   className="pull-right fa fa-pen edit-button"/>
                            </Link>

                        </>
                    }
                </>
            }
            {
                editing &&
                <div className={`${editing && (type !== 'module') ? 'nav-link active' : ''}`}>
                    <div className='row'>
                        <input className="form-control col-9"
                               value={itemCache.title}
                               onChange={(e) =>
                                   setItemCache({...itemCache, title: e.target.value})}/>
                        <span className="pull-right col-3">
                        <i onClick={() => deleteItem(item)}
                           className="pull-right fa fa-times mr-1"/>
                        <i onClick={() => {
                            setEditing(false)
                            updateItem(itemCache)
                        }}
                           className="pull-right fa fa-check"/>
                    </span>
                    </div>
                </div>
            }
        </li>
    )
}

export default EditableItem