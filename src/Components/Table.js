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
          </table>
        </div>
    )
  }
}

export default Table