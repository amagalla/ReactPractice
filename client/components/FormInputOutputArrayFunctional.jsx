import React, { useState } from "react";
import "../styles/formInputOutputArray.scss";

const FormInputOutputArrayFunctional = () => {
  const [nameInput, useNameInput] = useState({ firstName: "", lastName: "" });
  const [namesArr, useNamesArr] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    useNameInput((prevName) => ({
      ...prevName,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    useNamesArr((prevArr) => [...prevArr, nameInput]);
  };

  const namesArrOutput = namesArr.map((names) => (
    <div>
      {names.firstName} {names.lastName}
    </div>
  ));

  return (
    <>
      <div className='inputOutput-container'>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Enter Firstname'
            name='firstName'
            value={nameInput.firstName || ""}
            onChange={handleChange}
          />
          <input
            type='text'
            placeholder='Enter Lastname'
            name='lastName'
            value={nameInput.lastName || ""}
            onChange={handleChange}
          />
          <button>Submit</button>
        </form>
      </div>
      <div className='submit-output-container'>{namesArrOutput}</div>
    </>
  );
};

export default FormInputOutputArrayFunctional;
