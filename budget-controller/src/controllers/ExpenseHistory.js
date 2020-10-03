import React from 'react';
import Expense from './Expense';

const ExpenseHistory = ({ expenses }) => {
  return (
    <div className="expenses-incurred">
      <h2>Expense History</h2>

      {
        expenses.map(expense => (
          <Expense
            key={expense.id}
            expense={expense}
          />
        ))

      }
    </div>
  );
}

export default ExpenseHistory;