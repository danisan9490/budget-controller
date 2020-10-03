import React, { useState, useEffect } from 'react';
import BudgetControl from './controllers/BudgetControl';
import BudgetQuestion from './controllers/BudgetQuestion';
import ExpenseHistory from './controllers/ExpenseHistory';
import Form from './controllers/Form';

function App() {

  const [budget, setBudget] = useState(0);
  const [AmountLeft, setAmountLeft] = useState(0);
  const [showBudgetQuestion, setShowBudgetQuestion] = useState(true);
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({});
  const [createExpense, setCreateExpense] = useState(false);

  useEffect(() => {
    if (createExpense) {
      setExpenses([
        ...expenses,
        newExpense
      ])
    }

    const budgetLeft = AmountLeft - newExpense.amount;
    setAmountLeft(budgetLeft);

    setCreateExpense(false);

  }, [newExpense])


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
                <Form
                  setNewExpense={setNewExpense}
                  setCreateExpense={setCreateExpense}
                />
                <BudgetControl
                  budget={budget}
                  AmountLeft={AmountLeft}
                />
              </div>
              <div className="one-half column">
                <ExpenseHistory
                  expenses={expenses}
                />

              </div>
            </div>
          }

        </div>

      </header>
    </div>
  );
}

export default App;
