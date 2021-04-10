import React, { Component } from "react";


class Table extends Component{
  render (){
    return (
      <div id="table" className="container">
          <table className="table table-sm table-striped table-hover">
              <thead>
             <tr>   
              <th>Amount</th>
              <th>Date</th>
              <th>Location</th>
              <th>Description</th>
              <th >Delete?</th>
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
                      <td>
                        <button 
                          onClick={this.props.handleDelete}
                          className="btn btn-danger align-middle btn-sm"
                          >
                          Delete
                        </button>
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