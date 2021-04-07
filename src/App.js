import React, {Component} from "react";
import './App.css';

import Form from "./Components/Form";
import Table from "./Components/Table";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {amount: '', 
                  date: '',
                  location: '', 
                  description: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleChange(event) {
      this.setState({amount: event.target.value,
                      date: event.target.value,
                      location: event.target.value,
                      description: event.target.value
                    })
                    
    }

    handleSubmit(event) { 
      event.preventDefault();
      alert("An expense was submitted" + this.state.value)
    }
    
    render (){
      return (
      <div className="App">
        <header>
          <h1>Expense Tracker</h1>
        </header>
        <Form handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        <br></br>
       <Table />
      </div>
    );
  }
}

export default App;
