import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

import "./ExpenseItem.css";

const ExpenseItem = ({ title, amount, date }) => {
  const clickHandler = () => {
    console.log("I just got clicked!");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2> {title} </h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button type="submit" onClick={clickHandler}>
        Change Title
      </button>
    </Card>
  );
};

export default ExpenseItem;
