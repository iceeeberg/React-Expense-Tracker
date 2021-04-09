import React, {Component} from "react"

class Form extends Component{
    render(){
    return (
      <div>
      <form onSubmit={this.props.handleSubmit} id="form">
        <label amount="amount">Enter Amount:</label>
          <input 
            onChange={this.props.handleChange}
            value={this.props.amount}
            name='amount'
            type="number"
            placeholder="Enter Amount..">
          </input>
        <label date="date">Enter Date:</label>
          <input 
            onChange={this.props.handleChange} 
            value={this.props.date}
            name='date'
            type="date">
          </input>
        <label location ="location">Enter Location:</label>
          <input 
            onChange={this.props.handleChange}
            value={this.props.location} 
            name='location'
            type="text" 
            placeholder="Enter Location..">
            </input>
        <label description="description">Enter Description:</label>
          <input 
          onChange={this.props.handleChange} 
          value={this.props.description}
          name='description'
          type="text"
          placeholder="Enter Description..">
          </input>
        <br></br>
        <button 
          id="submit" 
          type="submit" 
          value="Submit Expense"
          onSubmit={this.props.handleSubmit}>
          </button>
        </form>
      </div>
      )
    }
  }
  export default Form