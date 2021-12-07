import React from "react";

const Button = ({ className, onClick, value }) => {
    return (
        <div className={className}>
            <button onClick={onClick} value={value}>{value}</button>
        </div>)
}

export default Button;
