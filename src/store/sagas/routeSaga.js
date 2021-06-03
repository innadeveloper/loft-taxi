import { takeEvery, call, put } from 'redux-saga/effects';
import {
  GET_ROUTE, 
  getRouteSuccess, 
  getRouteFailure
} from '../actions/route';
import { getRouteFromServer } from '../api/getRoute';

export function* routeWatcher() {
  yield takeEvery(GET_ROUTE, getRouteSaga)
}

export function* getRouteSaga(action) {
  const addresses = action.payload
  const data = yield call(getRouteFromServer, addresses)

  if(data) {
      yield put(getRouteSuccess(data))
  } else {
      yield put(getRouteFailure(data.error))
  }
}

