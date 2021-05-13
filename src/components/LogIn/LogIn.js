import React from 'react';
import { CssTextField } from '../Input/Input';
import Button from "@material-ui/core/Button";
import { withStyles } from '@material-ui/core/styles'; 

const StyledButton = withStyles({
  root: {
    backgroundColor: '#FDBF5A',
    fontWeight: 'normal',
    height: '61px',
    borderRadius: '70px',
    border: 0,
    color: '#000',
    fontSize: '25px',
    padding: '15px 140px',
    '&:hover': {
      backgroundColor: '#FFA842',
    }
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

const LogIn = ({ goToPage }) => {
  return (
    <div className='form__wrapper'>
      <h2 className='form__title'>Войти</h2>
      <form className='form__form'>
        <div className='form__row'>
        <CssTextField
          required
          className='form__input'
          id="loginEmail"
          label="Email"
          type="email"
          placeholder="mail@mail.ru"/>
        </div>
        <div className="form__row row__after">
        <CssTextField
          required
          className='form__input'
          id="loginPassword"
          label="Пароль"
          type="password"
          placeholder="*************"/>
        </div>
        <div className="form__row">
          <StyledButton
            type="submit"
            className='button form__button'
            color="primary"
            onClick={() => goToPage('map')}>
            Войти
          </StyledButton>
        </div>
      </form>
      <div className='form__log'>
        <div className='form__log-text'>Новый пользователь?</div>
        <span onClick={() => goToPage('signup')} className='form__log-button'>Регистрация</span>
      </div>
    </div>
  );
}

export { LogIn }