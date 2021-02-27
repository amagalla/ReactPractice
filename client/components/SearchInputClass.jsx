import React, { Component } from "react";
import { fetchData } from "../api/api";

const namesUrl = "https://jsonplaceholder.typicode.com/users";

class SearchInputClass extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: "",
      namesArr: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { value } = e.target;
    this.setState({ searchInput: value });
  }

  componentDidMount() {
    fetchData(namesUrl).then((data) => this.setState({ namesArr: data }));
  }

  render() {
    const displayName = this.state.namesArr
      .filter((element) => {
        if (this.state.searchInput === "") {
          return element;
        } else if (
          element.name
            .toLowerCase()
            .includes(this.state.searchInput.toLocaleLowerCase())
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
        <p className='search-title-component'>This is Class Component</p>
        <div className='search-input-box'>
          <input
            type='text'
            placeholder='Search Name...'
            value={this.state.searchInput}
            onChange={this.handleChange}
          />
        </div>
        <div className='search-output'>{displayName}</div>
      </div>
    );
  }
}

export default SearchInputClass;
