import React from "react";
import "./ExpensesList.scss";
import ExpenseItem from "../ExpenseItem/ExpenseItem";

const ExpensesList = (props) => {
  const { filteredExpenses } = props;

  if (filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found.</h2>;
  }


  return (
    <ul className="expenses-list">
      {filteredExpenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
