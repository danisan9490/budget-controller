import React from 'react';
import BudgetQuestion from './controllers/BudgetQuestion';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Budget Controller</h1>

        <div className="main-content content">
          <BudgetQuestion />
        </div>

      </header>
    </div>
  );
}

export default App;
