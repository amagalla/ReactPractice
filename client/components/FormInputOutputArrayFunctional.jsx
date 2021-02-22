import React, { useState } from "react";
import "../styles/formInputOutputArray.scss";

const FormInputOutputArrayFunctional = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  const [namesArr, setNamesArr] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setName((prevName) => ({
      ...prevName,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNamesArr((prevNames) => [...prevNames, name]);
  };

  const namesArrOutput = namesArr.map((name, i) => (
    <div key={i}>
      {name.firstName} {name.lastName}
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
            value={name.firstName || ""}
            onChange={handleChange}
          />
          <input
            type='text'
            placeholder='Enter Lastname'
            name='lastName'
            value={name.lastName || ""}
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
