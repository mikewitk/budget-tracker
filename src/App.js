import React from 'react';
import './App.css';
import Header from './components/header/Header'
import Balance from './components/balance/Balance'
import TransactionList from './components/transaction/TransactionList'
import AddTransaction from './components/addTransaction/AddTransaction'

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Balance />
      <TransactionList />
      <AddTransaction />
    </div>
  );
}

export default App;
