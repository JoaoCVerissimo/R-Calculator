import React, { useState } from 'react'
import Button from './Button'
import Display from './Display'

function Calculator() {
  const [displayValue, setDisplayValue] = useState('')
  const [previousValue, setPreviousValue] = useState('')
  const [operator, setOperator] = useState('')

  const handleNumberClick = (num) => {
    setDisplayValue((prevValue) => {
      if (prevValue === '0') {
        return num
      }
      return prevValue + num
    })
  }

  const handleOperatorClick = (op) => {
    if (displayValue !== '') {
      setPreviousValue(displayValue)
      setOperator(op)
      setDisplayValue('')
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
    setPreviousValue('')
    setOperator('')
  }

  const handleEqualClick = () => {
    let result = ''
    if (operator && previousValue) {
      const operand1 = parseFloat(previousValue)
      const operand2 = parseFloat(displayValue)

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
            result = 'Error: Division by zero'
          } else {
            result = String(operand1 / operand2)
          }
          break
        default:
          result = 'Error: Invalid operator'
      }
    }

    setDisplayValue(result)
    setPreviousValue('')
    setOperator('')
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
          <Button className="button wide" onClick={() => handleNumberClick('0')} value="0" />
          <Button className="button" onClick={handleDecimalClick} value="." />
          <Button className="button orange" onClick={handleEqualClick} value="=" />
        </div>
      </div>
    </div>
  )
}

export default Calculator
