import React from "react";

export const ProfileForm = () => {

  return (
    <form className="profile__form">
        <h2 className="form__name">Профиль</h2>
        <h5 className="profile__name-text">Введите платежные данные</h5>
        <div className="profile__form-center">     
      <div className="profile__card">
        <label htmlFor="name">Имя владельца<br />
          <input 
          id="name" 
          type="text" 
          placeholder="Loft" 
          name="name"
          className="form__input form__input-card"/>
        </label>
        <label htmlFor="cardNumber">Номер карты<br />
          <input 
          id="cardNumber"
          type="cardNumber" 
          placeholder="5545  2300  3432  4521" 
          name="cardNumber"
          className="form__input form__input-card" />
        </label>
        <div className="card__form-2">
        <label htmlFor="expiryDate">MM/YY<br />
          <input 
          id="expiryDate"
          type="expiryDate" 
          placeholder="05/08" 
          name="expiryDate"
          className="form__input form__input-card" />
        </label>
        <label htmlFor="cvc">CVC<br />
          <input 
          id="cvc"
          type="number" 
          placeholder="667" 
          name="cvc"
          className="form__input form__input-card" />
        </label>
        </div>
      </div>
      <div className="Card__front">
        <div className="Card__front-content">
        <div className="Card__front-top"> 
        </div>
        <div className="Card__front-center">
        </div>
        <div className="Card__front-bottom">
        </div>
        </div>
      </div>
      </div>
      <button type="submit" className="button__form">Сохранить</button>
    </form>
  )
}