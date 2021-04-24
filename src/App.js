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
                  description: ''}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete= this.handleDelete.bind(this);
  };

  componentDidMount(){
    const localStorageExpenses = 
    JSON.parse(localStorage.getItem('expenses')) || [];
  localStorageExpenses 
    ? this.setState({
      expenses: localStorageExpenses
    })
   : this.setState({ expenses: [] });
  };

  componentDidUpdate(prevPops, prevState){
    if (this.state.expenses !== prevState.expenses.length){
      localStorage.setItem('expenses', JSON.stringify(this.state.expenses));
    };
  };
  
    handleChange(e) {
      const {name, value} = e.target
      this.setState({
        [name]: value 
      });  
    };

    handleSubmit(e) { 
      e.preventDefault();
      const { amount, date, location, description } = this.state
      if (!amount  || !date || !location || !description){
        alert("Please complete all fields before submitting.")
        return
      }
      const expenseItem = {
        id: Math.random(),
        amount: this.state.amount,
        date: this.state.date,
        location: this.state.location ,
        description: this.state.description 
      };
      this.setState (prevState => ({
        expenses: [...prevState.expenses, expenseItem], 
        amount: '', 
        date: '',
        location: '', 
        description: ''
      }));
    };
    
    handleDelete = (id) => {
      const tableMinusTargetRow = this.state.expenses.filter(
        (expenseRow) => expenseRow.id !== id 
      );
      this.setState({
        expenses: tableMinusTargetRow
      });
    };

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
