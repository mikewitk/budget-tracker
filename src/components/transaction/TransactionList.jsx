import React, { useEffect, useContext, useState } from 'react';
import './Transaction.css'
import Transaction from './Transaction'
import { GlobalContext } from '../../context/GlobalState'

const TransactionList = () => {

  const { transactions } = useContext(GlobalContext)
  const [ transactionsList, setTransactionsList ] = useState(transactions)

  const filterBy = ( type ) => {
    const newTransactions = transactions.filter( transaction => transaction.type === type )

    setTransactionsList(newTransactions)
  }

  useEffect( () => {
    setTransactionsList(transactions)
  }, [transactions])
  
    return (
    <div className="transaction-list-container">
      <div className="title-filter-container">
        <h3>History</h3>
        <div className="filter-container">
          <p>Filter by:</p>
          <p onClick={ () => filterBy('income') }>Income</p>
          <p onClick={ () => filterBy('expense') }>Expense</p>
          <p onClick={() => setTransactionsList(transactions)}>All</p>
        </div>
      </div>
      <ul className="transaction-list">
        {transactionsList.map( transaction => (
          <Transaction 
            key={transaction.id} 
            transaction={transaction} 
          />
        ))}
      </ul>
    </div>
  )
}

export default TransactionList;