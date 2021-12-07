import React, { useState } from "react";
import Display from "./Display";
import Button from "./Button";

function Calculator() {
    const [number, setNumber] = useState(0);
    const [oldNumber, setOldNumber] = useState(0);
    const [operator, setOperator] = useState();
    const [flag, setFlag] = useState(false);

    function inputNumber(e) {
        parseInt(number) === 0 || flag === true ? setNumber(e.target.value) : setNumber(number + e.target.value);
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
        if (e) {
            switch (operator) {
                case "÷":
                    setNumber(parseFloat(oldNumber) / parseFloat(number));
                    setOldNumber(0);
                    setFlag(true);
                    break;
                case "x":
                    setNumber(parseFloat(oldNumber) * parseFloat(number));
                    setOldNumber(0);
                    setFlag(true);
                    break;
                case "+":
                    setNumber(parseFloat(oldNumber) + parseFloat(number));
                    setOldNumber(0);
                    setFlag(true);
                    break;
                case "-":
                    setNumber(parseFloat(oldNumber) - parseFloat(number));
                    setOldNumber(0);
                    setFlag(true);
                    break;
                default:
                    break;
            }
        } else {
            switch (operator) {
                case "÷":
                    setOldNumber(parseFloat(oldNumber) / parseFloat(number));
                    setNumber(0);
                    break;
                case "x":
                    setOldNumber(parseFloat(oldNumber) * parseFloat(number));
                    setNumber(0);
                    break;
                case "+":
                    setOldNumber(parseFloat(oldNumber) + parseFloat(number));
                    setNumber(0);
                    break;
                case "-":
                    setOldNumber(parseFloat(oldNumber) - parseFloat(number));
                    setNumber(0);
                    break;
                default:
                    break;
            }
        }
    }

    return (
        <div className="app">
            <Display num={number} />
            <div className="button-panel">
                <div>
                    <Button onClick={clear} value={"AC"} />
                    <Button onClick={changeSignal} value={"+/-"} />
                    <Button onClick={getPercentage} value={"%"} />
                    <Button onClick={handleOperator} value={"÷"} />
                </div>
                <div>
                    <Button onClick={inputNumber} value={7} />
                    <Button onClick={inputNumber} value={8} />
                    <Button onClick={inputNumber} value={9} />
                    <Button onClick={handleOperator} value={"x"} />
                </div>
                <div>
                    <Button onClick={inputNumber} value={4} />
                    <Button onClick={inputNumber} value={5} />
                    <Button onClick={inputNumber} value={6} />
                    <Button onClick={handleOperator} value={"-"} />
                </div>
                <div>
                    <Button onClick={inputNumber} value={1} />
                    <Button onClick={inputNumber} value={2} />
                    <Button onClick={inputNumber} value={3} />
                    <Button onClick={handleOperator} value={"+"} />
                </div>
                <div>
                    <Button onClick={inputNumber} value={0} />
                    <Button onClick={inputNumber} value={"."} />
                    <Button onClick={getResult} value={"="} />
                </div>
            </div>
        </div>
    )
}

export default Calculator;
