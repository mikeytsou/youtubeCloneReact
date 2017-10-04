import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { search: '' };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({ search: event.target.value });
  }

  render() {
    return (
      <div className="search-bar">
        <input value={this.state.search} onChange={this.onInputChange} />
      </div>
    );
  }
}

export default SearchBar;
