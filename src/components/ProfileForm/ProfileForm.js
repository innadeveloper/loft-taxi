import React, { useEffect, useState } from 'react';
import '../../styles/profileform.css';
import Button from '@material-ui/core/Button';
import logo from '../../img/icons/logo.png';
import chip from '../../img/icons/chip.png'; 
import card from '../../img/icons/card.png'; 
import { connect } from 'react-redux'
import { getCard, changeCard } from '../../store/actions/card'

const ProfileComponent = ({ token, cardData, error, isLoading, getCard, changeCard }) => {
  useEffect(() => {
    getCard(token);
  }, [token])

  const [cardName, setCardName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [expiryDate, setExpiryDate] = useState('')
  const [cvc, setCvc] = useState('')

  useEffect(() => {
    if (cardData.cardName) {
      setCardName(cardData.cardName)
    }
    if (cardData.cardNumber) {
      setCardNumber(cardData.cardNumber)
    }
    if (cardData.expiryDate) {
      setExpiryDate(cardData.expiryDate)
    }
    if (cardData.cvc) {
      setCvc(cardData.cvc)
    }
}, [cardData.cardName, cardData.cardNumber, cardData.expiryDate, cardData.cvc])

  const handlePostCardData = (event) => {
    event.preventDefault();
    changeCard({ cardNumber, expiryDate, cardName, cvc, token })
  }

  return (
    <>      
        <div className='profileform'>
         <div className='profileform__overlay'>
         <div className='profileform__container'>
            {isLoading && <h2>Loading...</h2>}
            {error && <h2 style={{color: 'red'}}>{error}</h2>}
            <div className='profileform__text'>
              <div className='profileform__title'>Профиль</div>
              <div className='profileform__description'>Введите платежные данные</div>
            </div>
            <div className='profileform__content'>
              <form className='profileform__form' id='card' onSubmit={handlePostCardData}>
                <div className='input'>
                  <label className='input__label input__label--font-color--grey'>Имя владельца</label>
                  <input 
                  className='input__field'
                  name='cardName' 
                  type='text' 
                  label='Имя владельца' 
                  placeholder='Loft'                    
                  value={cardName} 
                  onChange={e => setCardName(e.target.value)}        
                  />
                </div>
                <div className='input'>
                  <label className='input__label input__label--font-color--grey'>Номер карты</label>
                  <input 
                  className='input__field'
                  name='cardNumber' 
                  type='text' 
                  label='Номер карты' 
                  placeholder='5545 2300 3432 4521'                    
                  value={cardNumber}      
                  onChange={e => setCardNumber(e.target.value)}
                  />
                </div>
                <div className='profileform__row'>
                  <div className='input'>
                    <label className='input__label input__label--font-color--grey'>MM/YY</label>
                    <input 
                    className='input__field' 
                    name='expiryDate' 
                    type='text' 
                    label='MM/YY' 
                    placeholder='05/08'                     
                    value={expiryDate} 
                    onChange={e => setExpiryDate(e.target.value)}
                    />
                  </div>
                  <div className='input'>
                    <label className='input__label input__label--font-color--grey'>CVC</label>
                    <input 
                    className='input__field' 
                    name='cvc' 
                    type='text' 
                    label='CVC' 
                    placeholder='667' 
                    value={cvc} 
                    onChange={e => setCvc(e.target.value)}
                    />
                  </div>
                </div>
              </form>
              <div className='profileform__precheck'>
                <div className='profileform__precheck-content'>
                  <div className='profileform__precheck-up-side'>
                    <img src={logo} alt='masterCard' className='card__masterCard' /> 
                    <div className='profileform__precheck-date'>{cardData.expiryDate}</div>
                  </div>
                  <div className='profileform__precheck-card-number'>{cardData.cardNumber}</div>
                  <div className='profileform__precheck-bottom-side'>
                    <img src={chip} alt='masterCard' className='card__masterCard' /> 
                    <img src={card} alt='masterCard' className='card__masterCard' />                
                  </div>
                </div>
              </div>
            </div>
            <div className='profileform__button'>
              <Button 
                className='button'  
                type="submit" 
                form='card'
                variant="contained" 
                color="primary" 
                data-testid='form-submit'>Сохранить
              </Button>
            </div>
          </div>
        </div>         
      </div>      
    </>
  )
}

const mapStateToProps = ({ card, auth }) => ({
  token: auth.token,
  cardData: card.data,
  isLoading: card.isLoading,
  error: card.error
})

const mapDispatchToProps = { getCard, changeCard }

export const ProfileForm = connect(mapStateToProps, mapDispatchToProps)(ProfileComponent)

