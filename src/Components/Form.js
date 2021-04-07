import React, {Component} from "react"

class Form extends Component{
    render(){
    return (
      <div>
      <form onSubmit={this.props.handleSubmit} id="form">
        <label amount="amount">Enter Amount:</label>
          <input onChange={this.props.handleInputChange} type="number" placeholder="Enter Amount.."></input>
        <label date="date">Enter Date:</label>
          <input onChange={this.props.handleInputChange} type="date"></input>
        <label location ="location">Enter Location:</label>
          <input onChange={this.props.handleInputChange}  type="text" placeholder="Enter Location.."></input>
        <label description="description">Enter Description:</label>
          <input onChange={this.props.handleInputChange} type="text"placeholder="Enter Description.."></input>
        <br></br>
          <input id="submit" type="button" value="Submit Expense"></input>
        </form>
      </div>
      )
    }
  }
  export default Form