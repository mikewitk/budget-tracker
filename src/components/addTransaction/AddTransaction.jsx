import React, { useState } from 'react'
import './AddTransaction.css'


const AddTransaction = () => {

  const [description, setDescription] = useState("")
  const [amount, setAmount] = useState("")

  return (
    <div className="add-transaction-container">
      <h3>Add new transaction</h3>
      <form action="">
        <label htmlFor="description">Enter description</label>
        <input 
          type="text" 
          name="description" 
          value={description} 
          onChange={e => setDescription(e.target.value)} 
          required 
          className="add-transaction-description"
        />
        <label htmlFor="description">Amount</label>
        <input 
          type="number" 
          name="amount" 
          value={amount} 
          onChange={e => setAmount(e.target.value)} 
          required 
          className="add-transaction-amount"
        />
        <button type="submit" className="add-transaction-button" >Add</button>
      </form>
    </div>
  )
}

export default AddTransaction