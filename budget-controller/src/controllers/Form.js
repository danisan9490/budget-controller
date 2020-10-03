import React, { useState } from 'react'

const Form = () => {
  return (
    <form
    >
      <h2>Expenses</h2>

      <div className="field">
        <label>Expense Name</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Example: Transport, Rent..."
        />
      </div>
      <div className="field">
        <label>Amount</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Example: 300..."
        />
      </div>
      <input
        type="submit"
        className="button-primary u-full-width"
        value="Add expense..."
      />

    </form>
  )
}

export default Form;