import React, { Component } from "react";
import "../styles/formInputOutputArray.scss";

class FormInputOutputArray extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      namesArr: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    const newArr = this.state.namesArr;
    newArr.push(this.state.firstName + " " + this.state.lastName);
    this.setState({
      firstName: "",
      lastName: "",
      namesArr: newArr,
    });
  }

  render() {
    const namesArrOutput = this.state.namesArr.map((names, i) => (
      <div key={i}>{names}</div>
    ));

    return (
      <>
        <div className='inputOutput-title'>This is Class Component</div>
        <div className='inputOutput-container'>
          <form onSubmit={this.handleSubmit}>
            <input
              type='text'
              placeholder='Enter Firstname'
              name='firstName'
              value={this.state.firstName || ""}
              onChange={this.handleChange}
            />
            <input
              type='text'
              placeholder='Enter Lastname'
              name='lastName'
              value={this.state.lastName || ""}
              onChange={this.handleChange}
            />
            <button>Submit</button>
          </form>
        </div>
        <div className='submit-output-container'>{namesArrOutput}</div>
      </>
    );
  }
}

export default FormInputOutputArray;
