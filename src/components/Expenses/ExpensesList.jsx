import React from "react";
import ExpenseItem from "./ExpenseItem";
const ExpensesList = (props) => {
  let expensesContent = <p>There was no spending this yera</p>;
  if (props.items.length > 0) {
    expensesContent = props.items.map((element) => {
      return (
        <ExpenseItem
          key={element.id}
          title={element.title}
          amount={element.amount}
          date={element.date}
        />
      );
    });
  }
  return <div>{expensesContent}</div>;
};

export default ExpensesList;
