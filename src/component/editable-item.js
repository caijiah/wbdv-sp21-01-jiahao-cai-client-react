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
        <li className={`${type === 'module'? 'list-group-item' : 'nav-item mr-1 mb-1'}
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
                        <div className={`nav-link ${active? 'active':''}`}>
                            <div className='row'>
                                <div className='col-9'>
                                    <Link to={to}>
                                        {item.title}
                                    </Link>
                                </div>
                                <span className='col-3'>
                                    <i onClick={() => setEditing(true)}
                                       className="pull-right fa fa-pen edit-button"/>
                                </span>
                            </div>
                        </div>
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