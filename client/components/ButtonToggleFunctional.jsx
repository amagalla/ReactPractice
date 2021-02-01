import React, { useState } from "react";
import "../styles/buttonToggleFunction.scss";

const ButtonToggleFunctional = () => {
  const [toggle, setToggle] = useState(false);

  const toggleText = () => {
    if (!toggle) {
      document.getElementById("toggle-btn").innerHTML = "OFF";
      document.getElementById("toggle-btn").style.backgroundColor = "black";
      document.getElementById("toggle-btn").style.color = "white";
    } else {
      document.getElementById("toggle-btn").innerHTML = "ON";
      document.getElementById("toggle-btn").style.backgroundColor = "yellow";
      document.getElementById("toggle-btn").style.color = "black";
    }
    setToggle((prev) => !prev);
  };

  return (
    <>
      <div className="toggle-button-container">
        <button onClick={toggleText} id="toggle-btn">
          ON
        </button>
      </div>
      <p className="toggle-instruct">
        Click to toggle ON/OFF (Functional Component)
      </p>
    </>
  );
};

export default ButtonToggleFunctional;
