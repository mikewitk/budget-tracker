import React from 'react';
import './App.css';
import Header from './components/header/Header'

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <h1>BALANCE COMPONENT</h1>
      <h1>INCOME/EXPENSE COMPONENT</h1>
      <h1>TRANSACTIONLIST COMPONENT</h1>
      <h1>ADD TRANSACTION COMPONENT</h1>
    </div>
  );
}

export default App;
