import React from "react";

export const Display = ({ title,ingredients,dummyFunc}) => {
    return (
        <div className="mdiv1">
            <div>
            {title}

            </div>
            <div>
            {ingredients}

            </div>
        </div>
    )
}