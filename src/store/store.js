import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { authMiddleware } from './middlewares/authMiddleWare';
import { cardMiddleware } from './middlewares/cardMiddleWare';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(authMiddleware, cardMiddleware))
);