import React, { createContext, useReducer } from 'react'
import AppReducer from '../AppReducer'


const initialState = {
  transactions: [
    {
      id: 1,
      description: "Flower",
      amount: -29.99,
      type: 'expense',
    },
    {
      id: 2,
      description: "Book",
      amount: -45.50,
      type: 'expense',
    },
    {
      id: 3,
      description: "Income",
      amount: +456.32,
      type: 'income',
    },
    {
      id: 4,
      description: "Bonus",
      amount: +89.57,
      type: 'income',
    },
    {
      id: 5,
      description: "Insurance",
      amount: -102.36,
      type: 'expense',
    },
    {
      id: 6,
      description: "Investments",
      amount: +68.13,
      type: 'income',
    },
  ]
}


export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer( AppReducer, initialState )

  const deleteTransaction = ( id ) => {
    return dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    })
  }

  const addTransaction = ( transaction ) => {
    return dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    })
  }
  
  return (
    <GlobalContext.Provider value={{
      transactions: state.transactions,
      deleteTransaction,
      addTransaction,
    }}>
      {children}
    </GlobalContext.Provider>
  )
}