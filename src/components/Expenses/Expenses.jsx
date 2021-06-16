import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = ({ expenses }) => {
  const [year, setYear] = useState("2020");

  const onAddFilter = (filteredValue) => {
    setYear(filteredValue);
    // console.log(filteredValue);
    console.log(`expenses.js`);
    console.log(filteredValue);
  };

  const filteredExpense = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={year} onChangeFilter={onAddFilter} />
        {/* {expensesContent} */}
        <ExpensesChart expenses={filteredExpense}/>
        <ExpensesList items={filteredExpense} />
      </Card>
    </div>
  );
};

export default Expenses;
