import React from "react";
import ButtonToggleFunctional from "./components/ButtonToggleFunctional";
import ButtonToggleClass from "./components/ButtonToggleClass";
import Title from "./components/Title";
import CounterFunctional from "./components/CounterFunctional";
import CounterClass from "./components/CounterClass";
import FormInputOutputArrayFunctional from "./components/FormInputOutputArrayFunctional";

function App() {
  return (
    <>
      <Title />
      <ButtonToggleFunctional />
      <ButtonToggleClass />
      <CounterFunctional />
      <CounterClass />
      <FormInputOutputArrayFunctional />
    </>
  );
}

export default App;
