import React from 'react'

function Button({ className, onClick, value, disabled = false }) {
  return (
    <div className={className}>
      <button onClick={onClick} value={value} disabled={disabled}>
        {value}
      </button>
    </div>
  )
}

export default Button
