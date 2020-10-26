import React from 'react';
import ProfileDisplay from './profileDisplay';

class Profile extends React.Component {
  render() {
    const { teams, handleClick, closeBox } = this.props;
    return (
      <div className="profileContainer">
        {teams.map(
          (
            { name, leagueTitles, goals, goalDiffulty, id, league, i },
            index
          ) => {
            return (
              <div key={id}>
                <ProfileDisplay
                  name={name}
                  leagueTitles={leagueTitles}
                  league={league}
                  goals={goals}
                  goalDiffulty={goalDiffulty}
                  id={name + index}
                  handleClick={handleClick}
                  index={i}
                  closeBox={closeBox}
                />
              </div>
            );
          }
        )}
      </div>
    );
  }
}

export default Profile;
