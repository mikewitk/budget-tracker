import React from 'react'
import './Balance.css'

const Balance = () => {

  return (
    <div className="balance-container">
      <div className="total-container">
        <h4>YOUR BALANCE</h4>
        <h1>+$50.48</h1>
      </div>
      <div className="income-expense-container">
        <div className="income-container">
          <h4>INCOME</h4>
          <p>+$400.73</p>
        </div>
        <div className="expense-container">
          <h4>EXPENSE</h4>
          <p className="expense-amount">-$350.25</p>
        </div>
      </div>
    </div>
  )
}

export default Balance;