import React, { useState } from 'react'
import Button from './Button'
import Display from './Display'

// TODO: Add keyboard support for all buttons;

function Calculator() {
  const [displayValue, setDisplayValue] = useState('0')
  const [previousValue, setPreviousValue] = useState('')
  const [operator, setOperator] = useState('')
  const [shouldClearDisplay, setShouldClearDisplay] = useState(false)
  const [isOperatorDisabled, setIsOperatorDisabled] = useState(false)

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
    setIsOperatorDisabled(false)
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
      setIsOperatorDisabled(true)
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
    setDisplayValue('0')
    setPreviousValue('')
    setOperator('')
    setShouldClearDisplay(false)
    setIsOperatorDisabled(false)
  }

  const handleEqualClick = () => {
    if (!operator || !previousValue || !displayValue) {
      return
    }

    if (previousValue && operator && displayValue) {
      const operand1 = parseFloat(previousValue)
      const operand2 = parseFloat(displayValue)
      const result = performCalculation(operator, operand1, operand2)

      setDisplayValue(result)
      setPreviousValue('')
      setOperator('')
      setShouldClearDisplay(true)
    }
  }

  return (
    <div className="app">
      <Display num={displayValue} />
      <div className="button-panel">
        <div>
          <Button className="button" onClick={handleClearClick} value="AC" />
          <Button
            className="button"
            onClick={handleSignChangeClick}
            value="+/-"
            disabled={displayValue === '' || displayValue === '0' || displayValue === '-0' || isOperatorDisabled}
          />
          <Button
            className="button"
            onClick={handlePercentageClick}
            value="%"
            disabled={displayValue === '' || displayValue === '0' || displayValue === '-0' || isOperatorDisabled}
          />
          <Button
            className={`button orange ${isOperatorDisabled && operator === '/' ? 'selected-operator' : ''}`}
            onClick={() => handleOperatorClick('/')}
            value="÷"
            disabled={displayValue === '' || displayValue === '0' || displayValue === '-0' || isOperatorDisabled}
          />
        </div>
        <div>
          {['7', '8', '9'].map((num) => (
            <Button className="button" onClick={() => handleNumberClick(num)} value={num} key={num} />
          ))}
          <Button
            className={`button orange ${isOperatorDisabled && operator === '*' ? 'selected-operator' : ''}`}
            onClick={() => handleOperatorClick('*')}
            value="x"
            disabled={displayValue === '' || isOperatorDisabled}
          />
        </div>
        <div>
          {['4', '5', '6'].map((num) => (
            <Button className="button" onClick={() => handleNumberClick(num)} value={num} key={num} />
          ))}
          <Button
            className={`button orange ${isOperatorDisabled && operator === '-' ? 'selected-operator' : ''}`}
            onClick={() => handleOperatorClick('-')}
            value="-"
            disabled={displayValue === '' || isOperatorDisabled}
          />
        </div>
        <div>
          {['1', '2', '3'].map((num) => (
            <Button className="button" onClick={() => handleNumberClick(num)} value={num} key={num} />
          ))}
          <Button
            className={`button orange ${isOperatorDisabled && operator === '+' ? 'selected-operator' : ''}`}
            onClick={() => handleOperatorClick('+')}
            value="+"
            disabled={displayValue === '' || isOperatorDisabled}
          />
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
