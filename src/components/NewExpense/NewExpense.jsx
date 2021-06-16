import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
// import "./NewExpense.css";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [clicked, setClicked] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
  };

  const clickHandler = () => {
    setClicked(true);
  };
  let initialState = <button onClick={clickHandler}>Add New Expense</button>;

  if (clicked) {
    initialState = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />;
  }

  return <div className="new-expense">{initialState}</div>;
};

export default NewExpense;
