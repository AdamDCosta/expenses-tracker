import React from "react";
import "./ExpenseDate.scss";

const ExpenseDate = (props) => {
  const { date } = props;

  const day = date.toLocaleString("en-UK", { day: "2-digit" });
  const month = date.toLocaleString("en-UK", { month: "long" });
  const year = date.getFullYear();

  return (
    <div className="expense-date">
      <p className="expense-date__day">{day}</p>
      <p className="expense-date__month">{month}</p>
      <p className="expense-date__year">{year}</p>
    </div>
  );
};

export default ExpenseDate;
