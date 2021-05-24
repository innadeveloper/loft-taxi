import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { authMiddleware } from './middlewares/authMiddleware';
import { getCardMiddleware } from './middlewares/getCardMiddleware';
import { postCardDataMiddleware } from './middlewares/postCardMiddleware';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(authMiddleware, getCardMiddleware, postCardDataMiddleware))
);