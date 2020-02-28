import React from 'react';
import './App.css';
import Header from './components/header/Header'
import Balance from './components/balance/Balance'

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Balance />
      <h1>INCOME/EXPENSE COMPONENT</h1>
      <h1>TRANSACTIONLIST COMPONENT</h1>
      <h1>ADD TRANSACTION COMPONENT</h1>
    </div>
  );
}

export default App;
