import React from 'react';
import './App.css';
import SidePanel from './pages/SidePanel/SidePanel';
import HeaderWithConnect from './components/Header';
import Map from './pages/Map/Map';
import Profile from './pages/Profile/Profile';
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { connect } from 'react-redux';

class App extends React.Component { 
  static propTypes = {
    isLoggedIn: PropTypes.bool
  }  

  render() {
    return (
      <div className="App">
        {this.props.isLoggedIn && <HeaderWithConnect />}
        <Switch>
          <Route
            exact path="/" render={() => this.props.isLoggedIn ? <Redirect to="/map" /> : <SidePanel />} />
            <PrivateRoute path="/map" component={ Map } />
            <PrivateRoute path="/profile" component={ Profile } />
        </Switch>
      </div>
    );
  }
}

export default connect((state) => ({ isLoggedIn: state.auth.isLoggedIn }))(App)