import React, { useState } from 'react'
import Error from './Error';
import shortid from 'shortid';

const Form = () => {

  const [expense, setExpense] = useState('');
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState(false);

  const addExpense = e => {
    e.preventDefault();
    if (amount < 1 || isNaN(amount) || expense.trim() === '') {
      setError(true);
      return;
    }
    setError(false);

    const expenses = {
      expense,
      amount,
      id: shortid.generate()
    }
    console.log(expenses)


  }

  return (
    <form onSubmit={addExpense} >
      <h2>Expenses</h2>

      <div className="field">
        <label>Expense Name</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Example: Transport, Rent..."
          value={expense}
          onChange={e => setExpense(e.target.value)}
        />
      </div>
      <div className="field">
        <label>Amount</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Example: 300..."
          value={amount}
          onChange={e => setAmount(parseInt(e.target.value, 10))}
        />
      </div>
      <input
        type="submit"
        className="button-primary u-full-width"
        value="Add expense..."
      />
      {error ? <Error message="All Fields Are Required, Invalid Form" /> : null}

    </form>
  )
}

export default Form;