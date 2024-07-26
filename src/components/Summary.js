import React from 'react';

const Summary = ({ transactions }) => {
  const accountSummary = transactions.reduce((acc, transaction) => {
    if (!acc[transaction.account]) {
      acc[transaction.account] = { debit: 0, credit: 0 };
    }
    acc[transaction.account].debit += transaction.debit;
    acc[transaction.account].credit += transaction.credit;
    return acc;
  }, {});

  return (
    <div className="summary">
      <h2>Account Summary</h2>
      <ul>
        {Object.entries(accountSummary).map(([account, { debit, credit }]) => (
          <li key={account}>
            <strong>{account}</strong>: Debit ${debit}, Credit ${credit}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Summary;