
import React from 'react';

const Expense = ({ expense }) => {
  console.log(expense)
  return (
    <li className="exoenses" >
      <p>
        {expense.expense}
        <span className="expense">£  {expense.amount}</span>

      </p>
    </li>

  );
}

export default Expense;