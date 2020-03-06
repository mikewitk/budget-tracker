import React, { Fragment, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState'

const AddTransactionCategories = ({ setCategory }) => {

  const { categories } = useContext(GlobalContext)

  return (
    <Fragment>
      <label>Choose a category</label>
      <select onChange={e => setCategory(e.target.value)} >
        {Object.keys(categories).map( category => {
          return (
            <optgroup label={category.toUpperCase()}>
              {categories[category].map(subcategory => <option value={subcategory}>{subcategory}</option> )}
            </optgroup>
          )
        })}
      </select>
    </Fragment>
  )
}

export default AddTransactionCategories