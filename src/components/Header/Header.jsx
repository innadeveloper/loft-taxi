import React from 'react';
import HeaderLogo from '../HeaderLogo/HeaderLogo';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { widthAuth } from '../../components/AuthContext/AuthContext';
import PropTypes from "prop-types";

class Header extends React.Component {
  static propTypes = {
    logOut: PropTypes.func, 
    goToPage: PropTypes.func     
  }

  headerLogout = () => {
    this.props.logOut();
    this.props.goToPage('sidepanel');
  }

  render () {
    return (
      <div >
        <AppBar position="static">
          <Toolbar className="header">
            <HeaderLogo />       
            <nav>
              <Button onClick = {()=> this.props.goToPage('map')} className='header__button'>Карта</Button>
              <Button onClick = {()=> this.props.goToPage('profile')} className='header__button'>Профиль</Button>
              <Button onClick = {this.headerLogout} className='header__button'> Выйти </Button>
            </nav>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default widthAuth(Header);
