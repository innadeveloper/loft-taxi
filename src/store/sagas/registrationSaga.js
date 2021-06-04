import { takeEvery, call, put } from 'redux-saga/effects';
import { REGISTER, registerSuccess, registerFailure } from '../actions/registration';

import { serverRegister } from '../api/registration';

export function* registerWatcher () {
  yield takeEvery(REGISTER, registerSaga)
}

export function* registerSaga(action) {
  const {email, password, name, surname} = action.payload;
  const data = yield call(serverRegister, email, password, name, surname);
  if(data.success) {
      localStorage.setItem('token', data.token)
      yield put(registerSuccess(data.token))
  } else {
      yield put(registerFailure(data.error))
  }
}
 