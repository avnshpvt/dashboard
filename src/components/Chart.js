import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = ({ transactions }) => {
  const monthlyData = transactions.reduce((acc, transaction) => {
    const month = transaction.month;
    if (!acc[month]) {
      acc[month] = { month, debit: 0, credit: 0 };
    }
    acc[month].debit += transaction.debit;
    acc[month].credit += transaction.credit;
    return acc;
  }, {});

  const data = Object.values(monthlyData);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="debit" stroke="#8884d8" />
        <Line type="monotone" dataKey="credit" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;