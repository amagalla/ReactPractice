import React from "react";
import ButtonToggleFunctional from "./components/ButtonToggleFunctional";
import ButtonToggleClass from "./components/ButtonToggleClass";
import Title from "./components/Title";
import CounterFunctional from "./components/CounterFunctional";
import CounterClass from "./components/CounterClass";
import FormInputOutputArrayFunctional from "./components/FormInputOutputArrayFunctional";
import FormInputOutputArrayClass from "./components/FormInputOutputArrayClass";
import SearchInputFunctional from "./components/SearchInputFunctional";
import SearchInputClass from "./components/SearchInputClass";

function App() {
  return (
    <>
      <Title />
      <ButtonToggleFunctional />
      <ButtonToggleClass />
      <CounterFunctional />
      <CounterClass />
      <FormInputOutputArrayFunctional />
      <FormInputOutputArrayClass />
      <SearchInputFunctional />
      <SearchInputClass />
    </>
  );
}

export default App;
