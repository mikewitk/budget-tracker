import React, { useContext } from 'react'
import './Transaction.css'
import { GlobalContext } from '../../context/GlobalState'

const Transaction = ({ transaction }) => {

  const { deleteTransaction } = useContext(GlobalContext)

  const sign = transaction.amount >= 0 ? "+" : "-"
  
  return (
    <li className="transaction-item">
      <p>{transaction.description}</p>
      <span className={transaction.amount >= 0 ? "positive" : "negative"}>{sign}${Math.abs(transaction.amount).toFixed(2)}</span>
      <button onClick={() => deleteTransaction(transaction.id)}>Del</button>
    </li>
  )
}

export default Transaction