import React, {Component} from "react"

class Form extends Component{
  constructor(props){
    super(props)
    this.state = {
      amount: null,
      date: null,
      description: null, 
      location: null
    }
  }

  handleSubmit = (event) =>{
    event.preventDefault()
    const expense = this.state
    console.log(expense)
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.amount]: event.target.value,
      [event.target.date]: event.target.value,
      [event.target.location]: event.target.value,
      [event.target.description]: event.target.value,
    })
  }
  
  render() {
      const {amount} = this.state
    return (
      <div>
      <form onSubmit={this.handleSubmit} id="form">
        <label amount="amount">Enter Amount:</label>
          <input onChange={this.handleInputChange} type="number" placeholder="Enter Amount.."></input>
        <label date="date">Enter Date:</label>
          <input onChange={this.handleInputChange} type="date"></input>
        <label location ="location">Enter Location:</label>
          <input onChange={this.handleInputChange}  type="text" placeholder="Enter Location.."></input>
        <label description="description">Enter Description:</label>
          <input onChange={this.handleInputChange} type="text"placeholder="Enter Description.."></input>
        <br></br>
          <input id="submit" type="button" value="Submit Expense"></input>
        </form>
      </div>
      )
    }
  }

  export default Form