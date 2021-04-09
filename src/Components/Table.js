import React, { Component } from "react";

class Table extends Component{
  render (){
    return (
      <div id="table">
          <table id="costs">
              <thead>
             <tr>   
              <th>Amount</th>
              <th>Date</th>
              <th>Location</th>
              <th>Description</th>
            </tr>
              </thead>
              <tbody>
                {this.props.expenses.map(expense => {
                  return (
                    <tr key={expense.id}>
                      <td>
                        {expense.amount}
                      </td>
                      <td>
                        {expense.date}
                      </td>
                      <td>
                        {expense.location}
                      </td>
                      <td>
                      {expense.description}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
          </table>
        </div>
    )
  }
}

export default Table