import React, { useState } from 'react'
import Button from './Button'
import Display from './Display'

function Calculator() {
  const [displayValue, setDisplayValue] = useState('')

  const handleNumberClick = (num) => {
    setDisplayValue((prevValue) => prevValue + num)
  }

  const handleOperatorClick = (op) => {
    if (displayValue !== '') {
      // Check if the last character of the display value is an operator
      const lastChar = displayValue.slice(-1)
      if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') {
        // If the last character is an operator, replace it with the new operator
        setDisplayValue((prevValue) => prevValue.slice(0, -1) + op)
      } else {
        // Otherwise, append the operator to the display value
        setDisplayValue((prevValue) => prevValue + op)
      }
    }
  }

  const handleDecimalClick = () => {
    if (displayValue.indexOf('.') === -1) {
      setDisplayValue((prevValue) => prevValue + '.')
    }
  }

  const handlePercentageClick = () => {
    const value = parseFloat(displayValue)
    setDisplayValue(String(value / 100))
  }

  const handleSignChangeClick = () => {
    setDisplayValue((prevValue) => {
      if (prevValue.charAt(0) === '-') {
        return prevValue.slice(1)
      } else {
        return '-' + prevValue
      }
    })
  }

  const handleClearClick = () => {
    setDisplayValue('')
  }

  const handleEqualClick = () => {
    let result = ''
    try {
      const operands = displayValue.split(/[-+*/]/)
      const operator = displayValue.match(/[-+*/]/)[0]

      if (operands.length !== 2) {
        throw new Error('Invalid expression')
      }

      const [operand1, operand2] = operands.map(parseFloat)

      switch (operator) {
        case '+':
          result = String(operand1 + operand2)
          break
        case '-':
          result = String(operand1 - operand2)
          break
        case '*':
          result = String(operand1 * operand2)
          break
        case '/':
          if (operand2 === 0) {
            throw new Error('Division by zero')
          }
          result = String(operand1 / operand2)
          break
        default:
          throw new Error('Invalid operator')
      }

      if (result === undefined || result === null || isNaN(result)) {
        result = ''
      }
    } catch (error) {
      result = ''
    }

    setDisplayValue(result)
  }

  return (
    <div className="app">
      <Display num={displayValue || '0'} />
      <div className="button-panel">
        <div>
          <Button className="button" onClick={handleClearClick} value="AC" />
          <Button className="button" onClick={handleSignChangeClick} value="+/-" />
          <Button className="button" onClick={handlePercentageClick} value="%" />
          <Button className="button orange" onClick={() => handleOperatorClick('/')} value="÷" />
        </div>
        <div>
          {['7', '8', '9'].map((num) => (
            <Button className="button" onClick={() => handleNumberClick(num)} value={num} key={num} />
          ))}
          <Button className="button orange" onClick={() => handleOperatorClick('*')} value="x" />
        </div>
        <div>
          {['4', '5', '6'].map((num) => (
            <Button className="button" onClick={() => handleNumberClick(num)} value={num} key={num} />
          ))}
          <Button className="button orange" onClick={() => handleOperatorClick('-')} value="-" />
        </div>
        <div>
          {['1', '2', '3'].map((num) => (
            <Button className="button" onClick={() => handleNumberClick(num)} value={num} key={num} />
          ))}
          <Button className="button orange" onClick={() => handleOperatorClick('+')} value="+" />
        </div>
        <div>
          <Button className="button wide" onClick={() => handleNumberClick('0')} value={0} />
          <Button className="button" onClick={handleDecimalClick} value="." />
          <Button className="button orange" onClick={handleEqualClick} value="=" />
        </div>
      </div>
    </div>
  )
}

export default Calculator
