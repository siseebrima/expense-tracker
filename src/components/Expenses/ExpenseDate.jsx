import React from "react";
import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const newDate = new Date(props.date);
  const month = newDate.toLocaleString("en-US", { month: "long" });
  const year = newDate.toLocaleString("en-US", { year: "numeric" });
  const day = newDate.toLocaleString("en-US", { day: "2-digit" });
  // console.log(props.date.toLocaleString("en-US", { month: "long" }));
  // console.log(month);

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
