import React from 'react';

class Sorting extends React.Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <form className="sort">
        <select value={value} onChange={handleChange}>
          <option>Choose Sorting Option</option>
          <option value="alphabetical">Alphabetical</option>
          <option value="diffulty">Difficulty of Goals</option>
          <option value="titles">League Titles</option>
        </select>
      </form>
    );
  }
}

export default Sorting;
