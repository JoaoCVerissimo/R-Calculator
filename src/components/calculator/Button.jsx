import React from "react";

function Button(props) {
    const { className, onClick, value } = props;

    return (
        <div className={className}>
            <button onClick={onClick} value={value}>{value}</button>
        </div>
    )
}

export default Button;
