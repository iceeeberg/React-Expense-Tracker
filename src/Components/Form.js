import React from "react"

const Form  = ({ 
  handleSubmit, 
  handleChange, 
  amount, 
  date, 
  description, 
  location 
}) => {
   
    return (
    <div>
      <form onSubmit={handleSubmit} id="form">
    <div className="col-sm-9">
      <label className="col-sm-3 col-form-label" amount="amount">Enter Amount:</label>
      <input 
        onChange={handleChange}
        value={amount}
        name='amount'
        type="number"
        placeholder="Enter Amount..">
      </input>
    </div>
    <div className="col-sm-8">
      <label className="col-sm-4 col-form-label" date="date">Enter Date:</label>
        <input 
          onChange={handleChange} 
          value={date}
          name='date'
          type="date">
        </input>
      </div>
      <div className="col-sm-9">
        <label className="col-sm-3 col-form-label" location ="location">Enter Location:</label>
          <input 
            onChange={handleChange}
            value={location} 
            name='location'
            type="text" 
            placeholder="Enter Location..">
          </input>
        </div>
        <div className="col-sm-9">
        <label className="col-sm-3 col-form-label" description="description">Enter Description:</label>
          <input 
            onChange={handleChange} 
            value={description}
            name='description'
            type="text"
            placeholder="Enter Description..">
          </input>
          </div>
        <br></br>
      <div className="row">
        <div className="col-sm-9">
        <button 
          type="submit" 
          value="Submit Expense"
          className="btn btn-primary submitButton"
          onSubmit={handleSubmit}
          >
          Submit
          </button>
          </div>
        </div>
        </form>
    </div>
      )
    }

  export default Form