import React, { useContext, useState } from 'react'
import './AddTransaction.css'
import { GlobalContext } from '../../context/GlobalState'
import AddTransactionCategories from './AddTransactionCategories'

const AddTransaction = () => {

  const [description, setDescription] = useState("")
  const [amount, setAmount] = useState("")
  const [category, setCategory] = useState("")

  const { addTransaction } = useContext(GlobalContext)

  const handleSubmit = ( event ) => {
    event.preventDefault();
    const type = amount >= 0 ? 'income' : 'expense';

    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      description,
      amount: parseFloat(amount),
      type,
      category
    }
    console.log({newTransaction})

    addTransaction(newTransaction)
  }

  return (
    <div className="add-transaction-container">
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="description">Enter description</label>
        <input 
          type="text" 
          name="description" 
          value={description} 
          onChange={e => setDescription(e.target.value)} 
          required 
          className="add-transaction-description"
        />
        <div className="wrapper">
          <div className="amount-wrapper">
            <label htmlFor="description">Amount</label>
            <input 
              type="text" 
              name="amount" 
              value={amount} 
              onChange={e => setAmount(e.target.value)} 
              required 
              className="add-transaction-amount"
            />
          </div>
          <AddTransactionCategories setCategory={setCategory} />
        </div>
        <button className="add-transaction-button" >Add</button>
      </form>
    </div>
  )
}

export default AddTransaction