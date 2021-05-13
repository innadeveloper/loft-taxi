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
    padding: '15px 60px',
    '&:hover': {
      backgroundColor: '#FFA842',
    }
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

const SignUp = ({ goToPage }) => {
  return (
    <div className='form__wrapper'>
      <h2 className='form__title'>Регистрация</h2>
      <form className='form__form'>
        <div className='form__row'>
        <CssTextField
          required
          className='form__input'
          id="loginEmail"
          label="Email"
          type="email"
          placeholder="mail@mail.ru"
        />
        </div>
        <div className="form__row">
          <CssTextField
            required
            className='form__input'
            id="loginName"
            label="Как вас зовут?"
            type="text"
            placeholder="Петр Александрович"
          />
        </div>
        <div className="form__row">
          <CssTextField
            required
            className='form__input'
            id="loginPassword"
            label="Придумайте пароль"
            type="password"
            placeholder="*************"
          />
        </div>
        <div className="form__row">
            <StyledButton
              type="submit"
              className='button form__button'
              color="primary"
              onClick={() => goToPage('map')}
            >
              Зарегистрироваться
            </StyledButton>
          </div>
      </form>
      <div className='form__log'>
        <div className='form__log-text'>Уже зарегистрированы?</div>
        <span onClick={() => goToPage('login')} className='form__log-button'>Войти</span>
      </div>
    </div>
  );
}

export { SignUp }