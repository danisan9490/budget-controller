
import React from 'react';

const Expense = ({ expense }) => {
  return (
    <li className="expenses" >
      <p>
        {expense.expense}
        <span className="expense">£  {expense.amount}</span>

      </p>
    </li>

  );
}

export default Expense;