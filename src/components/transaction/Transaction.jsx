import React, { useContext } from 'react'
import './Transaction.css'
import { GlobalContext } from '../../context/GlobalState'

const Transaction = ({ transaction }) => {

  const { deleteTransaction } = useContext(GlobalContext)

  const sign = transaction.amount >= 0 ? "+" : "-"
  
  return (
    <div>
      <li className="transaction-item">
        <p>{transaction.description}</p>
        <span className={transaction.amount >= 0 ? "positive" : "negative"}>{sign}${Math.abs(transaction.amount).toFixed(2)}</span>
      </li>
      <button className="del-btn" onClick={() => deleteTransaction(transaction.id)}><i class="fa fa-trash-o" /></button>
    </div>
  )
}

export default Transaction