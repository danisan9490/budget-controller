import React, { useState } from 'react';
import Error from './Error';

const BudgetQuestion = ({ setBudget, setAmountLeft, setShowBudgetQuestion }) => {

  const [amount, setAmount] = useState(0);
  const [error, setError] = useState(false);

  const defineBudget = e => {
    setAmount(parseInt(e.target.value))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount < 1 || isNaN(amount)) {
      setError(true);
      return;
    }
    setError(false);
    setBudget(amount);
    setAmountLeft(amount);
    setShowBudgetQuestion(false);
  }
  return (
    <div>
      <h2>Insert your Budget</h2>

      <form
        onSubmit={handleSubmit}
      >
        <input
          type="number"
          className="u-full-width"
          placeholder="Insert your Budget..."
          onChange={defineBudget}
        />

        <input
          type="submit"
          className="button-primary u-full-width"
          value="Conitinue"

        />
        {error ? <Error message="Invalid amount" /> : null}

      </form>
    </div>
  );
}

export default BudgetQuestion;
