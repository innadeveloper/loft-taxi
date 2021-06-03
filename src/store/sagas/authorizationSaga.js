import { takeEvery, call, put } from 'redux-saga/effects';
import { 
  logIn, 
  logInError, 
  AUTHENTICATE 
} from '../actions/auth';
import { serverLogIn } from '../api/auth';

export function* authWatcher() {
  yield takeEvery(AUTHENTICATE, authenticateSaga)
}

function* authenticateSaga(action) {
    const {email, password} = action.payload;
    const data = yield call(serverLogIn, email, password);
    
    if (data.success) {
      localStorage.setItem('token', data.token);
      yield put(logIn(data.token, email));
    } else {
      yield put(logInError(data.error));
    } 
  }

