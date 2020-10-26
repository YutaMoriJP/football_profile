//run filter(), if {name} !== pageName, then return
import React from 'react';

class ProfilePage extends React.Component {
  render() {
    const { whatTeam, handleClick, teams } = this.props;
    return (
      <div className="profilePage">
        <button onClick={handleClick}>Go Back to Directory</button>
        <h1>Team Name: {whatTeam}</h1>
        <ul>
          <h2>Other Teams:</h2>
          {teams.map(({ name }) =>
            name !== whatTeam ? <li>{name}</li> : null
          )}
        </ul>
      </div>
    );
  }
}

export default ProfilePage;
