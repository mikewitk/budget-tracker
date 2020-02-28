import React from 'react'
import './Transaction.css'


const Transaction = ({ transaction }) => {

  const sign = transaction.amount >= 0 ? "+" : "-"
  
  return (
    <li className="transaction-item">
      <p>{transaction.text}</p>
      <span className={transaction.amount >= 0 ? "positive" : "negative"}>{sign}${Math.abs(transaction.amount)}</span>
    </li>
  )
}

export default Transaction