import React from 'react';
import './App.css';
import Header from './components/header/Header'
import Balance from './components/balance/Balance'
import TransactionList from './components/transaction/TransactionList'

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Balance />
      <TransactionList />
      <h1>ADD TRANSACTION COMPONENT</h1>
    </div>
  );
}

export default App;
