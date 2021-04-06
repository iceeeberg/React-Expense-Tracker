import React, {Component} from "react";
import './App.css';

import Form from "./Components/Form";
import Table from "./Components/Table";

class App extends Component {

  render() {
    return (
      <div className="App">
        <header>
          <h1>Expense Tracker</h1>
        </header>
        <Form  />
        <br></br>
       <Table />
      </div>
    );
  }
  }
 

export default App;
