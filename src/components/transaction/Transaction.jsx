import React, { useContext } from 'react'
import './Transaction.css'
import { GlobalContext } from '../../context/GlobalState'

const Transaction = ({ transaction }) => {
console.log("Transaction -> transaction", transaction)

  const { deleteTransaction } = useContext(GlobalContext)

  const icons = {
    House: "fa fa-home",
    Personal: "fa fa-user",
    Education: "fa fa-mortar-board",
    Salary: "fa fa-money",
    Investment: "fa fa-line-chart",
    Bonus: "fa fa-gift",
  }

  const sign = transaction.amount >= 0 ? "+" : "-"

  return (
    <div className="transaction-container">
      <li className="transaction-item">
        <div className="transaction-icon-text">
          <div className="icon-container">
            <i className={icons[transaction.category]} />
          </div>
            <p>{transaction.description}</p>
        </div>
        <span className={transaction.amount >= 0 ? "positive" : "negative"}>{sign}${Math.abs(transaction.amount).toFixed(2)}</span>
      </li>
      <button className="del-btn" onClick={() => deleteTransaction(transaction.id)}><i className="fa fa-trash-o" /></button>
    </div>
  )
}

export default Transaction