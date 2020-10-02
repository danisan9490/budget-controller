import React from 'react';

function BudgetQuestion() {
  return (
    <div>
      <h2>Insert your Budget</h2>

      <form>
        <input
          type="number"
          className="u-full-width"
          placeholder="Insert your Budget..."
        />

        <input
          type="submit"
          className="button-primary u-full-width"
          value="budget"

        />

      </form>
    </div>
  );
}

export default BudgetQuestion;
