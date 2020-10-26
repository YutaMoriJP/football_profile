import React from 'react';
import clubInfo from './clubInfo';
import Profile from './profile';
import Sorting from './sorting';
import ProfilePage from './profilePage';
import OwnSort from './ownSort';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [],
      teamsLoaded: false,
      value: '',
      isProfilePage: false,
      whatTeam: '',
      backToDirector: false,
      minTitles: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleUniqSort = this.handleUniqSort.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.backToDirectory = this.backToDirectory.bind(this);
    this.closeBox = this.closeBox.bind(this);
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  handleUniqSort(e) {
    const name = e.target.name;
    this.setState({ [name]: e.target.value });
  }
  handleClick(teamName) {
    this.setState({ whatTeam: teamName });
  }
  backToDirectory() {
    this.setState({ isProfilePage: false, whatTeam: '' });
  }
  handleSubmit(e) {
    const { minTitles } = this.state;
    e.preventDefault();
    const filtered = clubInfo.filter(
      ({ leagueTitles }) => leagueTitles >= minTitles
    );
    this.setState({ teams: filtered });
  }
  closeBox(num) {
    const { teams } = this.state;
    teams.splice(num, 1);
    teams.map((obj, i) => (obj.i = i));
    this.setState({ teams: teams });
  }
  reloadPage() {
    location.reload();
  }
  render() {
    const {
      teams,
      teamsLoaded,
      value,
      isProfilePage,
      whatTeam,
      minTitles,
    } = this.state;
    console.log(this.state);
    if (!isProfilePage) {
      return (
        <div>
          <Sorting value={value} handleChange={this.handleChange} />
          <OwnSort
            handleChanges={this.handleUniqSort}
            handleSubmit={this.handleSubmit}
            minTitles={minTitles}
          />
          <div className="test">
            <button onClick={this.reloadPage}>Reload Page</button>
          </div>
          <h1>{!teamsLoaded ? 'Loading...' : 'Football Teams Social Media'}</h1>
          <Profile
            teams={teams}
            handleClick={this.handleClick}
            closeBox={this.closeBox}
          />
        </div>
      );
    }
    return (
      <div>
        <ProfilePage
          whatTeam={whatTeam}
          handleClick={this.backToDirectory}
          teams={teams}
        />
      </div>
    );
  }
  componentDidMount() {
    clubInfo.map((obj, i) => (obj.i = i));
    this.setState({
      teams: clubInfo,
      teamsLoaded: true,
    });
  }

  componentDidUpdate(_, prevState) {
    const { teams, value, whatTeam } = this.state;
    if (prevState.value !== value) {
      if (value.startsWith('a')) {
        this.setState({
          teams: teams.sort((a, b) => a.name.localeCompare(b.name)),
        });
      } else if (value.startsWith('d')) {
        this.setState({
          teams: teams.sort((a, b) => b.goalDiffulty - a.goalDiffulty),
        });
      } else {
        this.setState({
          teams: teams.sort((a, b) => b.leagueTitles - a.leagueTitles),
        });
      }
    } else if (prevState.whatTeam !== whatTeam && whatTeam !== '') {
      this.setState({ isProfilePage: true });
    } else {
      return;
    }
  }
}

export default App;
