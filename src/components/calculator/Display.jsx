import React from "react";

function Display(props) {
    const { num } = props;

    return (
        <div className="display">
            <div>{num}</div>
        </div>
    )
}

export default Display;
