import React, { useState } from 'react';
import './App.css';
import SidePanel from './components/SidePanel';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import Header from './components/Header';
import Map from './pages/Map';
import Profile from './pages/Profile'; 

const pages = {
  login: <SidePanel />,
  signup: <SidePanel />,
  map: <Map />,
  profile: <Profile />  
};

class App extends React.Component {
  constructor () {
    super();
    this.state = { page: 'login' };
  }
    
  goToPage = (page) => {
    this.setState({ page });
  };

  render() {
    return (
      <React.Fragment>
        <main>
          { pages[ this.state.page ] }
          { this.state.page === 'login' ? <LogIn goToPage = { this.goToPage }/> : null }
          { this.state.page === 'signup' ? <SignUp goToPage = { this.goToPage }/> : null }
          { this.state.page === 'map' ? (<Header goToPage = { this.goToPage }/>) : null }
          { this.state.page === 'profile' ? (<Header goToPage = { this.goToPage }/>) : null }          
        </main>
      </React.Fragment>
    );
  }
}

export default App;
