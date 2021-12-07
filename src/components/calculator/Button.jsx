import React from "react";

function Button({ className, onClick, value }) {
    return (
        <div className={className}>
            <button onClick={onClick} value={value}>{value}</button>
        </div>)
}

export default Button;
