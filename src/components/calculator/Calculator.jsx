import React, { useState } from 'react'
import Button from './Button'
import Display from './Display'

// TODO: Add keyboard support for all buttons;
// TODO: If the previous one was an operator and the user clicks another operator, replace the previous operator with the new one;
// TODO: Styles for when operator is clicked;

function Calculator() {
  const [displayValue, setDisplayValue] = useState('')
  const [previousValue, setPreviousValue] = useState('')
  const [operator, setOperator] = useState('')
  const [shouldClearDisplay, setShouldClearDisplay] = useState(false)

  const handleNumberClick = (num) => {
    setDisplayValue((prevValue) => {
      if (shouldClearDisplay) {
        setShouldClearDisplay(false)
        return num
      }
      if (prevValue === '0' || ['+', '-', '*', '/'].includes(prevValue)) {
        if (previousValue === '') {
          setPreviousValue(num)
          return num
        }
        return num
      }
      return prevValue + num
    })
  }

  const performCalculation = (op, operand1, operand2) => {
    let result = ''
    switch (op) {
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
    return result
  }

  const handleOperatorClick = (op) => {
    if (displayValue !== '') {
      if (operator && previousValue) {
        const operand1 = parseFloat(previousValue)
        const operand2 = parseFloat(displayValue)
        const result = performCalculation(operator, operand1, operand2)

        setDisplayValue(result)
        setPreviousValue(result)
      } else {
        setPreviousValue(displayValue)
      }
      setOperator(op)
      setShouldClearDisplay(true)
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
    setShouldClearDisplay(false)
  }

  const handleEqualClick = () => {
    let result = ''
    if (operator && previousValue) {
      const operand1 = parseFloat(previousValue)
      const operand2 = parseFloat(displayValue)
      result = performCalculation(operator, operand1, operand2)
    }

    setDisplayValue(result)
    setPreviousValue('')
    setOperator('')
    setShouldClearDisplay(true)
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
