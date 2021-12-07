import React from "react";

function Button(props) {
    const { onClick, value } = props;

    if (value === 0) {
        return (
            <div className="button  wide"><button onClick={onClick} value={value}>{value}</button></div>
        )
    } else {
        return (
            <div className={value === "x" || value === "-" || value === "+" || value === "÷" || value === "=" ? "button orange" : "button"}>
                <button onClick={onClick} value={value}>{value}</button>
            </div>
        )
    }
}

export default Button;
