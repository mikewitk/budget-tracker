import React from 'react'
import './Balance.css'

const Balance = () => {

  return (
    <div className="balance-container">
      {/* TODO - balance color based on value */}
      <div className="total-container">
        <h4>YOUR BALANCE</h4>
        <h1>+$50.48</h1>
      </div>
      <div className="income-expense-container">
        <div className="amount-container">
          <h4>INCOME</h4>
          <p className="positive">+$400.73</p>
        </div>
        <div className="amount-container">
          <h4>EXPENSE</h4>
          <p className="negative">-$350.25</p>
        </div>
      </div>
    </div>
  )
}

export default Balance;