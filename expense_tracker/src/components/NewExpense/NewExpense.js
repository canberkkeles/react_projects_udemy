import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const expenseSaveHandler = (expense) => {
    const expenseData = { id: Math.random().toString(), ...expense };
    props.onAddExpense(expenseData);
  };

  const formVisibleHandler = () => {
    setIsFormVisible(true);
  };

  const cancelFormVisibleHandler = () => {
    setIsFormVisible(false);
  };

  return (
    <div className="new-expense">
      {!isFormVisible && (
        <button type="button" onClick={formVisibleHandler}>
          Add New Expense
        </button>
      )}
      {isFormVisible && (
        <ExpenseForm
          onExpenseSave={expenseSaveHandler}
          onCancel={cancelFormVisibleHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
