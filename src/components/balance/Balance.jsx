import React, { useContext } from 'react'
import './Balance.css'
import { GlobalContext } from '../../context/GlobalState'

const Balance = () => {

  const { transactions } = useContext(GlobalContext)

  
  const totalIncome = transactions.filter( transaction => transaction.amount >= 0 )
    .map( transaction => transaction.amount )
    .reduce( (acc, curValue) => acc + curValue, 0 )
  
  const totalExpense = transactions.filter( transaction => transaction.amount < 0 )
    .map( transaction => transaction.amount )
    .reduce( (acc, curValue) => acc + curValue, 0 )

  const balance = totalIncome + totalExpense;
  
  const sign = balance >= 0 ? "+" : "-"

  return (
    <div className="balance-container">
      <div className="total-container">
        <h4>YOUR BALANCE</h4>
        <h1 className={balance >= 0 ? "positive" : "negative"}>{sign}${Math.abs(balance).toFixed(2)}</h1>
      </div>
      <div className="income-expense-container">
        <div className="amount-container">
          <h4>INCOME</h4>
          <p className="positive">+${totalIncome}</p>
        </div>
        <div className="amount-container">
          <h4>EXPENSE</h4>
          <p className="negative">-${Math.abs(totalExpense)}</p>
        </div>
      </div>
    </div>
  )
}

export default Balance;