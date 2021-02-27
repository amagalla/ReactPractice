import React, { useState } from "react";
import "../styles/counter.scss";
import counterHook from "../customHooks/counterHook";

const counterFunctional = () => {
  const [value, increment, decrement] = counterHook();

  return (
    <>
      <div className='counter-container'>
        <button onClick={decrement}>-</button>
        <span>{value}</span>
        <button onClick={increment}>+</button>
      </div>
      <div className='counter-container counter'>
        <p>Increment/Decrement Counter Functional</p>
      </div>
    </>
  );
};
export default counterFunctional;
