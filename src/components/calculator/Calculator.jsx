import React, { useState } from "react";


function Calculator() {
    const [number, setNumber] = useState(0);
    const [firstNumber, setFirstNumber] = useState(0);
    const [operator, setOperator] = useState();

    function inputNumber(e) {
        parseInt(number) === 0 ? setNumber(e.target.value) : setNumber(number + e.target.value);
    }

    function handleOperator(e) {
        let op = e.target.value;
        setOperator(op);
        setFirstNumber(number);
        setNumber(0);
    }

    function getResult() {
        switch (operator) {
            case "÷":
                setNumber(parseFloat(firstNumber) / parseFloat(number));
                break;
            case "x":
                setNumber(parseFloat(firstNumber) * parseFloat(number));
                break;
            case "+":
                setNumber(parseFloat(firstNumber) + parseFloat(number));
                break;
            case "-":
                setNumber(parseFloat(firstNumber) - parseFloat(number));
                break;
            default:
                break;
        }
    }

    return (
        <div className="app">
            <div class="display">
                <div>{number}</div>
            </div>
            <div class="button-panel">
                <div>
                    <div class="button"><button onClick={() => setNumber(0)}>AC</button></div>
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
                    <div class="button orange"><button onClick={getResult}>=</button></div>
                </div>
            </div>
        </div>
    )
}

export default Calculator;
