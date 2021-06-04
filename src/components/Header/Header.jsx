import React from 'react';
import HeaderLogo from '../HeaderLogo/HeaderLogo';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOut } from '../../store/actions/auth';

class Header extends React.Component {
  static propTypes = {
    logOut: PropTypes.func
  }

  render () {
    return (
      <div >
        <AppBar position="static">
          <Toolbar className="header">
            <HeaderLogo />       
            <nav>
              <ul className="header__menu">
                <li className="header__menu-item"><Link to="/map" className='header__button'>Карта</Link></li>
                <li className="header__menu-item"><Link to="/profile" className='header__button'>Профиль</Link></li>
                <li className="header__menu-item"><Link to="/" onClick={this.props.logOut} className='header__button'>Выйти</Link></li>
              </ul>
            </nav>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const HeaderWithConnect = connect(
  null,
  { logOut }
)(Header);
export { HeaderWithConnect };
