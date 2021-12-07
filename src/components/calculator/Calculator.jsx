import React, { useState } from "react";


function Calculator() {
    const [number, setNumber] = useState(0);

    function inputNumber(e) {
        parseInt(number) === 0 ? setNumber(e.target.value) : setNumber(number + e.target.value);
    }

    return (
        <div className="app">
            <div class="display">
                <div>{number}</div>
            </div>
            <div class="button-panel">
                <div>
                    <div class="button"><button>AC</button></div>
                    <div class="button"><button>+/-</button></div>
                    <div class="button"><button>%</button></div>
                    <div class="button orange"><button>÷</button></div>
                </div>
                <div>
                    <div class="button"><button onClick={inputNumber} value={7}>7</button></div>
                    <div class="button"><button onClick={inputNumber} value={8}>8</button></div>
                    <div class="button"><button onClick={inputNumber} value={9}>9</button></div>
                    <div class="button orange"><button>x</button></div>
                </div>
                <div>
                    <div class="button"><button onClick={inputNumber} value={4}>4</button></div>
                    <div class="button"><button onClick={inputNumber} value={5}>5</button></div>
                    <div class="button"><button onClick={inputNumber} value={6}>6</button></div>
                    <div class="button orange"><button>-</button></div>
                </div>
                <div>
                    <div class="button"><button onClick={inputNumber} value={1}>1</button></div>
                    <div class="button"><button onClick={inputNumber} value={2}>2</button></div>
                    <div class="button"><button onClick={inputNumber} value={3}>3</button></div>
                    <div class="button orange"><button>+</button></div>
                </div>
                <div>
                    <div class="button  wide"><button onClick={inputNumber} value={0}>0</button></div>
                    <div class="button"><button onClick={inputNumber} value={"."}>.</button></div>
                    <div class="button orange"><button>=</button></div>
                </div>
            </div>
        </div>
    )
}

export default Calculator;
