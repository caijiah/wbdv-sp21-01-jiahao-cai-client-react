import React from 'react'
import {Link} from "react-router-dom";

export default () =>
    <>
        <h1>Home</h1>
        <ul className="list-group">
            <li>
                <Link to="/courses/table" className="list-group-item">
                    Courses Table
                </Link>
            </li>
            <li>
                <Link to="/courses/grid" className="list-group-item">
                    Courses Grid
                </Link>
            </li>
            <li>
                <Link to="/editor" className="list-group-item">
                    Course Editor
                </Link>
            </li>
        </ul>
    </>
