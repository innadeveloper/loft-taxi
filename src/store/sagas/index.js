import { all, fork } from 'redux-saga/effects';
import { authWatcher } from './authorizationSaga';
import { getCardWatcher, saveCardWatcher } from './paymentSaga';
import { addressWatcher } from './addressSaga';
import { routeWatcher } from './routeSaga';
/* import { regWatcher } from './registrationSaga'; */

export default function* rootSaga() {
    yield all([
      fork(authWatcher),
      fork(getCardWatcher),
      fork(saveCardWatcher),
      fork(addressWatcher),
      fork(routeWatcher)

      /* ,
      fork(regWatcher),
       */
    ]);
};