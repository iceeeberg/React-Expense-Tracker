import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';


import Form from "./Components/Form";
import Table from "./Components/Table";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {expenses: [],
                  amount: '', 
                  date: '',
                  location: '', 
                  description: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete= this.handleDelete.bind(this);
  }

    handleChange(e) {
      const value = e.target.value
      this.setState({
        [e.target.name]: value 
      })    
    }

    handleSubmit(e) { 
      e.preventDefault();
      const expenseItem = {
        id: Math.random(),
        amount: this.state.amount,
        date: this.state.date,
        location: this.state.location ,
        description: this.state.description 
      }
      this.setState (prevState => ({
        expenses: [...prevState.expenses, expenseItem]
      }))
    }
    
    handleDelete = () => {
      this.setState({
        expenses: this.state.expenses.slice(0,-1)
      })
    }

    render (){
      return (
      <div className="App">
        <header>
          <h1>Expense Tracker</h1>
        </header>
        <br></br>
        <Form 
          handleChange={this.handleChange} 
          handleSubmit={this.handleSubmit} 
          amount={this.state.amount}
          date={this.state.date}
          location={this.state.location} 
          description={this.state.description}
          />
        <br></br>
       <Table 
        expenses={this.state.expenses}
        handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
