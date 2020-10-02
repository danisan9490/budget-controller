import React, { useState } from 'react';
import BudgetQuestion from './controllers/BudgetQuestion';

function App() {

  const [budget, setBudget] = useState(0);
  const [AmountLeft, setAmountLeft] = useState(0);

  return (
    <div className="container">
      <header>
        <h1>Budget Controller</h1>

        <div className="main-content content">
          <BudgetQuestion
            setBudget={setBudget}
            setAmountLeft={setAmountLeft}
          />
        </div>

      </header>
    </div>
  );
}

export default App;
