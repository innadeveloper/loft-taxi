import { logIn, logOut, logInError, AUTHENTICATE, LOG_OUT_DELETE_TOKEN } from '../actions/auth';
import {serverLogIn} from '../api/auth';

export const authMiddleware = (store) => (next) => async (action) => {
  if (action.type === AUTHENTICATE) {
    const { email, password } = action.payload;
    const data = await serverLogIn(email, password);
    if(data.success){
      localStorage.setItem('token', data.token);
      store.dispatch(logIn(data.token))
    } else {
      store.dispatch(logInError(data.error))
    }
  } else if (action.type === LOG_OUT_DELETE_TOKEN) {
    localStorage.removeItem('token')
    store.dispatch(logOut())
} else {
    next(action);
  }
};




