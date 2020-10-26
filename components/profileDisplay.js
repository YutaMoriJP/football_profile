import React from 'react';

class ProfileDisplay extends React.Component {
  render() {
    const {
      name,
      leagueTitles,
      goals,
      goalDiffulty,
      league,
      id,
      handleClick,
      index,
      closeBox,
    } = this.props;
    return (
      <div key={id} className="profile">
        <div className="close">
          <button onClick={() => closeBox(index)}>X</button>
        </div>
        <div className="season">
          <p>{`${new Date().getFullYear()}-${new Date().getFullYear() + 1}`}</p>
        </div>
        <h1 style={{ textDecoration: 'underline' }}>{name}</h1>
        <p>Goals: {`${name}'s goal this season is to win the ${goals}`}</p>
        <p>Difficulty of the goal is: {goalDiffulty}</p>
        <p>Total league titles: {leagueTitles}</p>
        <p>
          {name} plays in the {league}
        </p>
        <button onClick={() => handleClick(name)}>Go to Profile Page</button>
      </div>
    );
  }
}

export default ProfileDisplay;
