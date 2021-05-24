export const LOG_IN = 'LOG_IN';
export const LOG_IN_ERROR= 'LOG_IN_ERROR';
export const LOG_OUT = 'LOG_OUT';
export const AUTHENTICATE = 'AUTHENTICATE';
export const LOG_OUT_DELETE_TOKEN = 'LOG_OUT_DELETE_TOKEN';

export const logIn = (token) => (
  { type: LOG_IN, payload: token}
);
export const logOut = () => (
  { type: LOG_OUT }
);
export const logInError = (error) => (
  { type: LOG_IN_ERROR, payload: error }
);

export const authenticate = (email, password) => ({
  type: AUTHENTICATE,
  payload: { email, password }
});

export const logOutDeleteToken = () => ({type: LOG_OUT_DELETE_TOKEN});