import React from "react";
import TableRow from "./TableRow"

const Table  = ({expenses, handleDelete}) => {
  
    return (
      <div id="table" className="container">
          <table className="table table-sm table-striped table-hover">
              <thead>
             <tr>   
              <th>Amount</th>
              <th>Date</th>
              <th>Location</th>
              <th>Description</th>
              <th>Delete?</th>
            </tr>
              </thead>
              <tbody>
                <TableRow expenses={expenses} handleDelete={handleDelete} />
              </tbody>
          </table>
        </div>
    )
  }

export default Table