import React from 'react';
import '../../styles/startform.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { authenticate } from '../../store/actions/auth';

const startPageData = {
    login: {
        nameField: false,
        passwordLabel: 'Пароль',
        buttonText: 'Войти',
        title: 'Войти',
        registText: 'Новый пользователь? ',
        registLink: 'Регистрация',
        changePopup: 'registration'
    },

    registration: {
      nameField: true,
      passwordLabel: 'Придумайте пароль*',
      buttonText: 'Зарегистрироваться',
      title: 'Регистрация',
      registText: 'Уже зарегестрированны? ',
      registLink: 'Войти',
      changePopup: 'login'
    }    
}

class StartForm extends React.Component {

    state = { currentPopup: 'login'}

    onChangeClick = (currentPopup) => {
        this.setState({ currentPopup })
    }

    submitHandle(evt) { 
        evt.preventDefault()
        const {email, password, name} = evt.target;
        this.props.authenticate(email.value, password.value, name.value);
    }

    render() {
        const currentForm = this.state.currentPopup === "login" ? startPageData.login : startPageData.registration;
        const {nameField, buttonText, title, registText, registLink, passwordLabel, changePopup} = currentForm;
        const nameInput = nameField ? 
        <TextField 
        id="name" 
        name="name" 
        label="Как вас зовут"
        placeholder="Петр Александрович"/> : '';
        const forgetPasswortLink = !nameField ? 
        <button 
        data-testid='form-name-input' 
        className="forget-button">Забыли пароль?
        </button> : '';

        return (
            <div className="start-form">
            <h2 className="start-form-title" data-testid='form-title'>{title}</h2>
            <form data-testid='start-form' noValidate autoComplete="off" onSubmit={(evt)=> this.submitHandle(evt)}>
                <TextField 
                id="email" 
                name="email" 
                label="Email*"
                placeholder="mail@mail.ru" />
                {nameInput}
                <TextField 
                id="password"
                type="password" 
                name="password" 
                label={passwordLabel}
                placeholder="*************" />
                {forgetPasswortLink}
                <Button 
                className="main-btn" 
                type="submit" 
                variant="contained" 
                color="primary" 
                data-testid='form-submit'>{buttonText}</Button>
            </form>
            <p className="regist-text">
                {registText} 
                <span 
                   data-testid='form-change-button' 
                   className="regist-link" 
                   onClick={()=> this.onChangeClick(changePopup)}
                >
                    {registLink}
                </span>
            </p>
        </div>
        );
    }
}

/* export default widthAuth(StartForm); */

const mapDispatchToProps = {authenticate};
const StartFormWithConnect = connect(null, mapDispatchToProps)(StartForm);
export { StartFormWithConnect };
