import React, { useContext } from 'react';
import './Transaction.css'
import Transaction from './Transaction'
import { GlobalContext } from '../../context/GlobalState'

const TransactionList = () => {

  const { transactions } = useContext(GlobalContext)
  
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