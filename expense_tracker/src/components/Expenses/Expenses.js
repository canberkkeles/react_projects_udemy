import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import { useState } from "react";
const Expenses = (props) => {
  const expenses = props.expenses;
  const [expenseFilter, setExpenseFilter] = useState("2020");
  const expenseFilterHandler = (filter) => {
    setExpenseFilter(filter);
  };

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === expenseFilter
  );

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={expenseFilter}
          onFilterChange={expenseFilterHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </li>
  );
};
export default Expenses;
