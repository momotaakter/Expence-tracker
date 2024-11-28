import React, { useState } from 'react';
import './Calculate.css'


const Calculate = () => {
  const [expenses, setExpenses] = useState([]); 
  const [name, setName] = useState(''); 
  const [amount, setAmount] = useState(''); 
  const [error, setError] = useState(''); 


  const handleNameChange = (e) => setName(e.target.value);
  const handleAmountChange = (e) => setAmount(e.target.value);

  const addExpense = () => {
    if (!name || !amount || amount <= 0) {
      setError('দয়া করে সঠিক নাম এবং পরিমাণ দিন');
      return;
    }

    const newExpense = {
      id: Date.now(), 
      name: name,
      amount: parseFloat(amount),
    };

    setExpenses([...expenses, newExpense]); 
    setName(''); 
    setAmount('');
    setError('');
  };

  const totalExpense = expenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Expense Tracker</h1>

      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Expense Name"
          style={{ marginRight: '10px', padding: '8px' }}
        />
        <input
          type="number"
          value={amount}
          onChange={handleAmountChange}
          placeholder="Amount"
          style={{ marginRight: '10px', padding: '8px' }}
        />
        <button onClick={addExpense} style={{ padding: '8px 16px', backgroundColor: '#4CAF50', color: 'white', border: 'none' }}>
          Add Expense
        </button>
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <h2>Total Expense: ${totalExpense.toFixed(2)}</h2>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {expenses.map((expense) => (
          <li key={expense.id} style={{ margin: '10px 0' }}>
            {expense.name}: ${expense.amount.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Calculate
