import { takeEvery, call, put } from 'redux-saga/effects';
import {
  GET_ADDRESS, 
  getAddressSuccess, 
  getAddressFailure
} from '../actions/address';
import { getAddressFromServer } from '../api/getAddress';

export function* addressWatcher() {
  yield takeEvery(GET_ADDRESS, getAddressSaga)
}

function* getAddressSaga() {
  const data = yield call(getAddressFromServer);
  
  if (data.addresses) {
    yield put(getAddressSuccess(data));
  } else {
    yield put(getAddressFailure(data.error));
  }
}

