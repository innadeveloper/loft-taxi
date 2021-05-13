import React from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import logo from '../../img/icons/logo-lofttaxi.png';
import logoText from '../../img/icons/logo-text-lofttaxi.png';

//props.goToPage
const Header = ({ goToPage }) => {
  return (
    <header>
      <Container>
        <div className="header__content">
          <div className="logo header__logo">
            <img src = { logo } alt="logo lofttaxi" className="logo-img"/>
            <img src = { logoText } alt="text lofttaxi" className="logo-text"/>
          </div>
          <nav className="header__menu">
            <Button onClick={() => goToPage('map')} className='header__button'>
              Карта
            </Button>
            <Button onClick={() => goToPage('profile')} className='header__button'>
              Профиль
            </Button>
            <Button onClick={() => goToPage('login')} className='header__button'>
              Выйти
            </Button>
          </nav>
        </div>
      </Container>
    </header>
  )};

  export { Header };
