import React from 'react';
import Chart from './components/Chart';
import Summary from "./components/Summary";
import './App.css';

const data = {
  transactions: [
    { id: 1, account: 'Sales', debit: 25000, credit: 0, month: 'Aug' },
    { id: 2, account: 'Sales', debit: 65000, credit: 0, month: 'Sep' },
    { id: 3, account: 'Sales', debit: 52000, credit: 0, month: 'Aug' },
    { id: 4, account: 'Bank', debit: 0, credit: 25000, month: 'Aug' },
    { id: 5, account: 'Purchase', debit: 0, credit: 6500, month: 'Sep' },
    { id: 6, account: 'Purchase', debit: 5000, credit: 25000, month: 'Dec' },
    { id: 7, account: 'Asset', debit: 1000, credit: 0, month: 'Dec' },
    { id: 8, account: 'Purchase', debit: 0, credit: 1200, month: 'Nov' }
  ]
};

function App() {
  return (
    <div className="App">
      <h1>Dashboard</h1>
      <Chart transactions={data.transactions} />
      <Summary transactions={data.transactions} />
    </div>
  );
}

export default App;