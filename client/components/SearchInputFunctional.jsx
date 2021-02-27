import React, { useState, useEffect } from "react";
import "../styles/searchInput.scss";
import { fetchData } from "../api/api";

const SearchInputFunctional = () => {
  const namesUrl = "https://jsonplaceholder.typicode.com/users";

  const [searchNames, setSearchNames] = useState("");
  const [names, setNames] = useState([]);

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchNames(value);
  };

  useEffect(() => {
    fetchData(namesUrl)
      .then((data) => setNames(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const displayNames = names
    .filter((element) => {
      if (searchNames === "") {
        return element;
      } else if (
        element.name.toLowerCase().includes(searchNames.toLowerCase())
      ) {
        return element;
      }
    })
    .map((element, i) => (
      <p className='search-names' key={i}>
        {element.name}
      </p>
    ));

  return (
    <div className='search-input-container'>
      <p className='search-title-component'>This is Function Component</p>
      <div className='search-input-box'>
        <input
          type='text'
          placeholder='Search Name...'
          value={searchNames}
          onChange={handleChange}
        />
      </div>
      <div className='search-output'>{displayNames}</div>
    </div>
  );
};

export default SearchInputFunctional;
