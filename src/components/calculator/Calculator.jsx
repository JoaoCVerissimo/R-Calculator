import React, { useState } from "react";
import Display from "./Display";
import Button from "./Button";

function Calculator() {
    const [number, setNumber] = useState(0);
    const [oldNumber, setOldNumber] = useState(0);
    const [operator, setOperator] = useState("");
    const [flag, setFlag] = useState(false);

    function inputNumber(e) {
        parseInt(number) === 0 || flag ? setNumber(e.target.value) : setNumber(number + e.target.value);
    }

    const clear = () => {
        setNumber(0);
        setOldNumber(0);
    }

    function changeSignal() {
        setNumber(number * -1);
    }

    function getPercentage() {
        setNumber(number / 100);
    }

    function handleOperator(e) {
        let op = e.target.value;
        if (oldNumber === 0) {
            setFlag(false);
            setOperator(op);
            setOldNumber(parseFloat(number));
            setNumber(0);
        } else {
            setOperator(op);
            getResult()
        }

    }

    function getResult(e) {
        switch (operator) {
            case "÷":
                if (e) {
                    setNumber(parseFloat(oldNumber) / parseFloat(number));
                    setOldNumber(0);
                    setFlag(true);
                } else {
                    setOldNumber(parseFloat(oldNumber) / parseFloat(number));
                    setNumber(0);
                }
                break;
            case "x":
                if (e) {
                    setNumber(parseFloat(oldNumber) * parseFloat(number));
                    setOldNumber(0);
                    setFlag(true);
                } else {
                    setOldNumber(parseFloat(oldNumber) * parseFloat(number));
                    setNumber(0);
                }
                break;
            case "+":
                if (e) {
                    setNumber(parseFloat(oldNumber) + parseFloat(number));
                    setOldNumber(0);
                    setFlag(true);
                } else {
                    setOldNumber(parseFloat(oldNumber) + parseFloat(number));
                    setNumber(0);
                }
                break;
            case "-":
                if (e) {
                    setNumber(parseFloat(oldNumber) - parseFloat(number));
                    setOldNumber(0);
                    setFlag(true);
                } else {
                    setOldNumber(parseFloat(oldNumber) - parseFloat(number));
                    setNumber(0);
                }
                break;
            default:
                break;
        }
    }

    return (
        <div className="app">
            <Display num={number} />
            <div className="button-panel">
                <div>
                    <Button className={"button"} onClick={clear} value={"AC"} />
                    <Button className={"button"} onClick={changeSignal} value={"+/-"} />
                    <Button className={"button"} onClick={getPercentage} value={"%"} />
                    <Button className={"button orange"} onClick={handleOperator} value={"÷"} />
                </div>
                <div>
                    <Button className={"button"} onClick={inputNumber} value={7} />
                    <Button className={"button"} onClick={inputNumber} value={8} />
                    <Button className={"button"} onClick={inputNumber} value={9} />
                    <Button className={"button orange"} onClick={handleOperator} value={"x"} />
                </div>
                <div>
                    <Button className={"button"} onClick={inputNumber} value={4} />
                    <Button className={"button"} onClick={inputNumber} value={5} />
                    <Button className={"button"} onClick={inputNumber} value={6} />
                    <Button className={"button orange"} onClick={handleOperator} value={"-"} />
                </div>
                <div>
                    <Button className={"button"} onClick={inputNumber} value={1} />
                    <Button className={"button"} onClick={inputNumber} value={2} />
                    <Button className={"button"} onClick={inputNumber} value={3} />
                    <Button className={"button orange"} onClick={handleOperator} value={"+"} />
                </div>
                <div>
                    <Button className={"button wide"} onClick={inputNumber} value={0} />
                    <Button className={"button"} onClick={inputNumber} value={"."} />
                    <Button className={"button orange"} onClick={getResult} value={"="} />
                </div>
            </div>
        </div>
    )
}

export default Calculator;
