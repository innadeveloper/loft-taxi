import { all, fork } from 'redux-saga/effects';
import { authWatcher } from './authorizationSaga';
import { registerWatcher } from './registrationSaga'; 
import { getCardWatcher, saveCardWatcher } from './paymentSaga';
import { addressWatcher } from './addressSaga';
import { routeWatcher } from './routeSaga';


export default function* rootSaga() {
    yield all([
      fork(authWatcher),
      fork(registerWatcher),
      fork(getCardWatcher),
      fork(saveCardWatcher),
      fork(addressWatcher),
      fork(routeWatcher)
    ]);
};