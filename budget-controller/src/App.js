import React, { useState } from 'react';
import BudgetQuestion from './controllers/BudgetQuestion';
import Form from './controllers/Form';

function App() {

  const [budget, setBudget] = useState(0);
  const [AmountLeft, setAmountLeft] = useState(0);
  const [showBudgetQuestion, setShowBudgetQuestion] = useState(true);

  return (
    <div className="container">
      <header>
        <h1>Budget Controller</h1>
        <div className="main-content content">
          {showBudgetQuestion ?
            <BudgetQuestion
              setBudget={setBudget}
              setAmountLeft={setAmountLeft}
              setShowBudgetQuestion={setShowBudgetQuestion}
            />
            :
            <div className="row">
              <div className="one-half column">
                <Form />
              </div>
              <div className="one-half column">
                2
              </div>
            </div>
          }

        </div>

      </header>
    </div>
  );
}

export default App;
