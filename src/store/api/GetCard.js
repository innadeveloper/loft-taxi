export const getCardDataFromServer = async (token) => {
  return fetch(`https://loft-taxi.glitch.me/card?token=${token}`).
  then(res => res.json());
};

export const postCardDataToServer = async ({cardNumber, expiryDate, cardName, cvc, token}) => {
    return fetch('https://loft-taxi.glitch.me/card', {
        method: 'POST',
        body: JSON.stringify({
            "cardNumber": cardNumber,
            "expiryDate": expiryDate,
            "cardName": cardName,
            "cvc": cvc,
            "token": token
        }),
        headers: { 'Content-Type': 'application/json' }
    }).
    then(res => res.json())
}