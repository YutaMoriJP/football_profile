import React from 'react';

class OwnSort extends React.Component {
  render() {
    const { handleSubmit, handleChanges, minTitles } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <label>Minimum League titles?</label>
        <input
          value={minTitles}
          type="text"
          name="minTitles"
          onChange={handleChanges}
        ></input>
        <input type="submit" value="Find out!"></input>
      </form>
    );
  }
}

export default OwnSort;
