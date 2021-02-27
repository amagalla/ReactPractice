import { useState } from "react";

const counterFunc = () => {
  const [value, setValue] = useState(0);

  const increment = () => {
    setValue((value) => value + 1);
  };

  const decrement = () => {
    setValue((value) => value - 1);
  };
  return [value, increment, decrement];
};

export default counterFunc;
