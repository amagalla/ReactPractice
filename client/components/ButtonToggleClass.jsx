import React, { Component } from "react";

class ButtonToggleClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "ON",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.text === "ON") {
      this.setState({ text: "OFF" });
      document.getElementById("toggle-btnC").style.backgroundColor = "black";
      document.getElementById("toggle-btnC").style.color = "white";
    } else {
      this.setState({ text: "ON" });
      document.getElementById("toggle-btnC").style.backgroundColor = "yellow";
      document.getElementById("toggle-btnC").style.color = "black";
    }
  }

  render() {
    return (
      <>
        <div className="toggle-button-container">
          <button onClick={this.handleClick} id="toggle-btnC">
            {this.state.text}
          </button>
        </div>
        <p className="toggle-instruct">
          Click to toggle ON/OFF (Class Component)
        </p>
      </>
    );
  }
}

export default ButtonToggleClass;
