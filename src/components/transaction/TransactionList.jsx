import React, { useEffect, useContext, useState } from 'react';
import './Transaction.css'
import Transaction from './Transaction'
import { GlobalContext } from '../../context/GlobalState'

const TransactionList = () => {

  const { transactions } = useContext(GlobalContext)
  const [ transactionsList, setTransactionsList ] = useState(transactions)
  const [ showFilters, setShowFilters ] = useState(true)

  const filterByType = ( type ) => {

    if (type === 'all') {
      return setTransactionsList(transactions)
    }
    const newTransactions = transactions.filter( transaction => transaction.type === type )

    setTransactionsList(newTransactions)
  }

  const filterByCategory = ( category ) => {

    if (category === 'All') {
      return setTransactionsList(transactions)
    }
    const newTransactions = transactions.filter( transaction => transaction.category === category )

    setTransactionsList(newTransactions)
  }

  useEffect( () => {
    setTransactionsList(transactions)
  }, [transactions])
  
    return (
    <div className="transaction-list-container">
      <div className="title-filter-container">
        <h3>History</h3>
        <button onClick={() => setShowFilters(!showFilters)}>
          <i className="fa fa-ellipsis-h" />
        </button>
      </div>
      <div className={ showFilters ? "isFilterAvailable" : ""}>
        <div className="filter-container">
          <label>Filter by Transaction:</label>
          <select onChange={e => filterByType(e.target.value)}>
            <option value='income' >Income</option>
            <option value='expense'>Expense</option>
            <option value='all' selected>All</option>
          </select>
        </div>
        <div className="filter-container">
          <label>Filter by:</label>
          <select onChange={e => filterByCategory(e.target.value)}>
            <option label="All" selected>All</option>
            <optgroup label="Income">
              <option value="Salary">Salary</option>
              <option value="Investment">Investment</option>
              <option value="Bonus">Bonus</option>
            </optgroup>
            <optgroup label="Expense">
              <option value="House">House</option>
              <option value="Personal">Personal</option>
              <option value="Education">Education</option>
            </optgroup>
          </select>
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