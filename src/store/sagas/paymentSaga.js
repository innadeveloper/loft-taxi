import { takeEvery, call, put } from 'redux-saga/effects';
import {
  GET_CARD, getCardSuccess, getCardFailure,
  CHANGE_CARD, changeCardSuccess
} from "../actions/card";
import {getCardDataFromServer} from '../api/getCard';
import {changeCardDataToServer} from '../api/changeCard'; 

export function* getCardWatcher() {
    yield takeEvery(GET_CARD, loadCardSaga);
}

export function* loadCardSaga(action) {
  const token = action.payload;
  const data = yield call(getCardDataFromServer, token);

  if (data.id) {
    yield put(getCardSuccess(data));
  } else {
    yield put(getCardFailure(data.error));
  }
}

export function* saveCardWatcher() {
  yield takeEvery(CHANGE_CARD, updateCardSaga);
}

export function* updateCardSaga(action) {
  const { cardNumber, expiryDate, cardName, cvc, token } = action.payload;
  const data = yield call(changeCardDataToServer, ({cardNumber, expiryDate, cardName, cvc, token}))

  if (data.success) {
    yield put(changeCardSuccess({cardNumber, expiryDate, cardName, cvc}));
  } else {
    yield put(getCardFailure(data.error));
  }
}
