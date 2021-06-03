import { combineReducers } from 'redux';
import authReducer from './auth';
import cardReducer from './card';
import addressReducer from './address'
import routeReducer from './route'

export default combineReducers(
    { auth: authReducer, card: cardReducer,
      address: addressReducer, route: routeReducer }
);

