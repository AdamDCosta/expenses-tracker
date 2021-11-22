import React from "react";
import "./ExpenseItem.scss";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../Card/Card";

const ExpenseItem = (props) => {
  const { title, amount, date } = props;

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">£ {amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
