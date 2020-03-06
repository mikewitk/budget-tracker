import React, { useContext } from 'react';
import './AddTransactionCategories.css'
import { GlobalContext } from '../../context/GlobalState'

const AddTransactionCategories = ({ setCategory }) => {

  const { categories } = useContext(GlobalContext)

  return (
    <div className="categories-container">
      <label>Choose a category</label>
      <select onChange={e => setCategory(e.target.value)} >
        {Object.keys(categories).map( category => {
          return (
            <optgroup key={category} label={category.toUpperCase()}>
              {categories[category].map(subcategory => <option key={subcategory} value={subcategory}>{subcategory}</option> )}
            </optgroup>
          )
        })}
      </select>
    </div>
  )
}

export default AddTransactionCategories