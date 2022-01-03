import React from "react";
import './listView.css'
export const Display = ({ instructions,timetocook,title,ingredients,dummyFunc,image}) => {
    return (
        <div className="mdiv1">
            <div>
            {title}
            </div>
            <div>
            {ingredients}
            </div>
            <div>{ instructions}</div>
            <div>{ timetocook} Minutes</div>
            <div>{image}</div>
        </div>
    )
}