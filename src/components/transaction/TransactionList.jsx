import React from 'react';
import './Transaction.css'
import Transaction from './Transaction'

const transactions = [
  {
    id: 1,
    text: "Flower",
    amount: -30.09
  },
  {
    id: 2,
    text: "Book",
    amount: -50.25
  },
  {
    id: 3,
    text: "Salary",
    amount: +365.89
  },
  {
    id: 4,
    text: "Bonus",
    amount: +46.32
  },
]

const TransactionList = () => {

  return (
    <div className="transaction-list-container">
      <h3>History</h3>
      <ul className="transaction-list">
        {transactions.map( transaction => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  )
}

export default TransactionList;