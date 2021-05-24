export const GET_CARD = 'GET_CARD';
export const GET_CARD_SUCCESS = 'GET_CARDS_SUCCESS';
export const GET_CARD_FAILURE = 'GET_CARDS_FAILURE';
export const CHANGE_CARD = 'CHANGE_CARD';
export const CHANGE_CARD_SUCCESS = 'CHANGE_CARD_SUCCESS'

export const getCard = (token) => (
  { type: GET_CARD, payload: token }
);

export const getCardSuccess = (
  { id, cardNumber, expiryDate, cardName, cvc }
) => ({
  type: GET_CARD_SUCCESS,
  payload: { id, cardNumber, expiryDate, cardName, cvc },
});

export const getCardFailure = (error) => (
  { type: GET_CARD_FAILURE, payload: error }
);

export const changeCard = ({cardNumber, expiryDate, cardName, cvc, token}) => ({
  type: CHANGE_CARD,
  payload: { cardNumber, expiryDate, cardName, cvc, token }
});

export const changeCardSuccess = ({cardNumber, expiryDate, cardName, cvc}) => ({
  type: CHANGE_CARD_SUCCESS,
  payload: { cardNumber, expiryDate, cardName, cvc }
})
