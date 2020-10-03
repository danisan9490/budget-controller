import React from 'react';
import { reviewBudget } from '../helper'

const BudgetControl = ({ budget, amountLeft }) => {
  return (
    <div>
      <div className="alert  alert-primary">
        Initial Budget: {budget}
      </div>
      <div className={reviewBudget(budget, amountLeft)}>
        Current Balance: {amountLeft}
      </div>
    </div>
  );
}

export default BudgetControl;