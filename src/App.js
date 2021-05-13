import React from 'react';
import './App.css';
import SidePanel from './pages/SidePanel/SidePanel';
import Header from './components/Header/Header';
import Map from './pages/Map/Map';
import Profile from './pages/Profile/Profile';
import { widthAuth } from './components/AuthContext/AuthContext';
import PropTypes from "prop-types";

const PAGES = {
  'sidepanel': (props) => <SidePanel {...props} />,
  'map': (props) => <Map {...props}/>,
  'profile': (props) => <Profile {...props} />  
}

class App extends React.Component { 
  static propTypes = {
    isLoggedIn: PropTypes.bool
  } 

  state = { page: 'sidepanel'}

  goToPage = (page) => {
    console.log('App', this.props.isLoggedIn);

    if (!this.props.isLoggedIn) {
      this.setState( {page: 'sidepanel'} );
      return
    }
    if (!page) {
      this.setState( {page: 'map'} );
      return
    }
    this.setState({ page });
  };

  render() {
    return <div className="App">
      {this.state.page !== 'sidepanel' && <Header goToPage={this.goToPage} />}
      {this.state.page === 'sidepanel' ? PAGES[this.state.page]({onSubmit: this.goToPage}) : PAGES[this.state.page]()}
    </div>
  };
}

export default widthAuth(App);
