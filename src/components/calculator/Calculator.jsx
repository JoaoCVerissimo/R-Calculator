/* eslint-disable no-eval */
import React, { useState } from "react";


function Calculator() {
    const [number, setNumber] = useState(0);
    const [oldNumber, setOldNumber] = useState(0);
    const [operator, setOperator] = useState();

    function inputNumber(e) {
        parseInt(number) === 0 ? setNumber(e.target.value) : setNumber(number + e.target.value);
    }

    function clear() {
        setNumber(0);
        setOldNumber(0);
    }

    function handleOperator(e) {
        let op = e.target.value;
        if (oldNumber === 0) {
            setOperator(op);
            setOldNumber(parseFloat(number));
            setNumber(0);
        } else {
            getResult()
            setOperator(op);
        }

    }

    function getResult(e) {
        if (e) {
            switch (operator) {
                case "÷":
                    //setNumber(eval("oldNumber / number"));
                    setNumber(parseFloat(oldNumber) / parseFloat(number));
                    setOldNumber(parseFloat(0));
                    break;
                case "x":
                    setNumber(parseFloat(oldNumber) * parseFloat(number));
                    //setNumber(eval("oldNumber * number"));
                    setOldNumber(parseFloat(0));
                    break;
                case "+":
                    setNumber(parseFloat(oldNumber) + parseFloat(number));
                    //setNumber(eval("oldNumber + number"));
                    setOldNumber(parseFloat(0));
                    break;
                case "-":
                    setNumber(parseFloat(oldNumber) - parseFloat(number));
                    //setNumber(eval("oldNumber - number"));
                    setOldNumber(parseFloat(0));
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
            <div class="display">
                <div>{number}</div>
            </div>
            <div class="button-panel">
                <div>
                    <div class="button"><button onClick={clear}>AC</button></div>
                    <div class="button"><button onClick={() => setNumber(number * -1)}>+/-</button></div>
                    <div class="button"><button onClick={() => setNumber(number / 100)}>%</button></div>
                    <div class="button orange"><button onClick={handleOperator} value={"÷"}>÷</button></div>
                </div>
                <div>
                    <div class="button"><button onClick={inputNumber} value={7}>7</button></div>
                    <div class="button"><button onClick={inputNumber} value={8}>8</button></div>
                    <div class="button"><button onClick={inputNumber} value={9}>9</button></div>
                    <div class="button orange"><button onClick={handleOperator} value={"x"}>x</button></div>
                </div>
                <div>
                    <div class="button"><button onClick={inputNumber} value={4}>4</button></div>
                    <div class="button"><button onClick={inputNumber} value={5}>5</button></div>
                    <div class="button"><button onClick={inputNumber} value={6}>6</button></div>
                    <div class="button orange"><button onClick={handleOperator} value={"-"}>-</button></div>
                </div>
                <div>
                    <div class="button"><button onClick={inputNumber} value={1}>1</button></div>
                    <div class="button"><button onClick={inputNumber} value={2}>2</button></div>
                    <div class="button"><button onClick={inputNumber} value={3}>3</button></div>
                    <div class="button orange"><button onClick={handleOperator} value={"+"}>+</button></div>
                </div>
                <div>
                    <div class="button  wide"><button onClick={inputNumber} value={0}>0</button></div>
                    <div class="button"><button onClick={inputNumber} value={"."}>.</button></div>
                    <div class="button orange"><button onClick={getResult} value={"="} >=</button></div>
                </div>
            </div>
        </div>
    )
}

export default Calculator;
