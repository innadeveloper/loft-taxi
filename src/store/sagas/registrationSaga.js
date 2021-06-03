/* import { takeEvery, call, put } from 'redux-saga/effects';
import { REGISTRATE, signIn, signInError } from '../actions/registration';
import { signUp } from '../api/signUp';

export function* regWatcher() {
  yield takeEvery(REGISTRATE, registrationSaga)
}

function* registrationSaga(action) {
  const {email, password, name, surname} = action.payload;
  const data = yield call(signUp, email, password, name, surname);
  if (data.success) {
    localStorage.setItem('token', data.token);
    yield put(signIn(data.token));
  } else {
    yield put(signInError(data.error));
  }
}

 */