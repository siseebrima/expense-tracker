import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [inputData, setInputData] = useState({
    title: "",
    amount: 0,
    date: "",
  });

  const titleHandler = (event) => {
    setInputData((prevData) => {
      return { ...prevData, title: event.target.value };
    });
    // console.log(event.target.value);
  };

  const amountHandler = (event) => {
    setInputData((prevData) => {
      return { ...prevData, amount: event.target.value };
    });
  };

  const dateHandler = (event) => {
    setInputData((prevData) => {
      return { ...prevData, date: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSaveExpenseData(inputData);
    setInputData({
      title: "",
      amount: "",
      date: "",
    });
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={titleHandler}
            value={inputData.title}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            name="amount"
            id="amount"
            min="0.01"
            step="0.01"
            onChange={amountHandler}
            value={inputData.amount}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            id="date"
            min="2010-01-01"
            max="2030-12-31"
            onChange={dateHandler}
            value={inputData.date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
