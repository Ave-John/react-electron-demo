import React from 'react';
import './App.css';
import logo from '../assets/logo.png';
import Login from '../Login/Login';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AppStart from '../Header/AppStart'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      appName: '',
      appVersion: '',
      header: 'block',
    };
  }

  handleGO = () => {
    this.setState({ header: 'none' });
  }

  render() {
    const { appName, appVersion } = this.state;
    return (
      <React.Fragment>
        <div className="App">
          <Router>
            <div style={{ display: this.state.header }}>
              <img src={logo} className="App-logo" alt="logo" />
              <p>{appName} version {appVersion}</p>
              <Link className="btn btn-primary" onClick={() => { this.setState({ header: 'none' }) }} to="/login">GO</Link>
            </div>
            <Route exact path="/login" component={Login} />
            <Route path="/header/:name" component={AppStart} />
          </Router>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
