import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const GoToMap = () => {
  return (
    <div className='oder-form-profile__wrapper'>
        <div className='oder-form-profile__overlay'>
            <div className='oder-form-profile__conatiner'>
                <div className='oder-form-profile-container__text'>
                    <div className='oder-form-profile__title'>Профиль</div>
                    <div className='oder-form-profile__text'>Платёжные данные обновлены. Теперь вы можете заказывать такси.</div>
                </div>
                <Button 
                className='btn-oder-form-profile'
                component={ Link }
                to='/map'>Перейти на карту
                </Button>
            </div>
        </div>
    </div>
  );
};
