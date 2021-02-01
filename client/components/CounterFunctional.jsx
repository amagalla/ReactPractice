import React, { useState } from "react";
import "../styles/counter.scss";

const counterFunctional = () => {
  const [value, useValue] = useState(0);

  const increment = () => {
    useValue((value) => value + 1);
  };

  const decrement = () => {
    useValue((value) => value - 1);
  };

  return (
    <>
      <div className="counter-container">
        <button onClick={decrement}>-</button>
        <span>{value}</span>
        <button onClick={increment}>+</button>
      </div>
      <div className="counter-container counter">
        <p>Increment/Decrement Counter Functional</p>
      </div>
    </>
  );
};
export default counterFunctional;
