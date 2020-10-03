import React from 'react';

const BudgetControl = ({ budget, AmountLeft }) => {
  return (
    <div>
      <div className="alert  alert-primary">
        Initial Budget: {budget}
      </div>
      <div className="alert">
        Current Budget: {AmountLeft}
      </div>
    </div>
  );
}

export default BudgetControl;