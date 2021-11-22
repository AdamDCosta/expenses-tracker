import React, { useState } from "react";
import "./Expenses.scss";
import ExpensesList from "../ExpensesList/ExpensesList";
import Card from "../Card/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesChart from "../ExpensesChart/ExpensesChart";

const Expenses = (props) => {
  const { expenses } = props;

  const [selectedYear, setSelectedYear] = useState("2021");

  const expenseYearFilter = (year) => {
    setSelectedYear(year);
  };
  
  const filteredExpensesJSX = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  })



  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={selectedYear}
        onChangeFilter={expenseYearFilter}
      />
      <ExpensesChart expenses={filteredExpensesJSX} />
      <ExpensesList filteredExpenses={filteredExpensesJSX} />
    </Card>
  );
};

export default Expenses;
