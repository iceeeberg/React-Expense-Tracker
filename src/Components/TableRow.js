import React from "react";

const TableRow = ( {expenses, handleDelete} ) => {
  return expenses.map((expense) => {
      return (
        <tr key={expense.id}>
          <td>{expense.amount}</td>
          <td>{expense.date}</td>
          <td>{expense.location}</td>
          <td>{expense.description}</td>
          <td>
            <button 
              onClick={() => handleDelete(expense.id)}
              className="btn btn-danger align-middle btn-sm"
              >
              Delete
            </button>
          </td>
        </tr>
      );
  });
};

export default TableRow