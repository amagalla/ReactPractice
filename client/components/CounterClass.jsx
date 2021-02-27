import React, { Component } from "react";
import "../styles/counter.scss";

class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
  }

  decrement() {
    this.setState((prev) => {
      return { value: prev.value - 1 };
    });
  }

  increment() {
    this.setState((prev) => {
      return { value: prev.value + 1 };
    });
  }

  render() {
    return (
      <>
        <div className='counter-container'>
          <button onClick={this.decrement}>-</button>
          <span>{this.state.value}</span>
          <button onClick={this.increment}>+</button>
        </div>
        <div className='counter-container counter'>
          <p>Increment/Decrement Counter Class</p>
        </div>
      </>
    );
  }
}

export default CounterClass;
