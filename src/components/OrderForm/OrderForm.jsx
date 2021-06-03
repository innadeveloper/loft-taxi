import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const GoToProfile = () => {
  return (
    <div className='oder-form-start__conatiner'>
      <span className='oder-form-start__title'>Заполните платежные данные</span>
      <span className='oder-form-start__text'>Укажите информацию о банковской карте, чтобы сделать заказ.</span>
      <Button 
        className='btn-oder-form-start'
        component={ Link }
        to='/profile'>Перейти в профиль
      </Button>
    </div>
  );
};


