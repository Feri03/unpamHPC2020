import {applyMiddleware, createStore, compose} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import combinedReducer from './Reducers';


const middleware = [thunk];

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

const store = createStore(
  combinedReducer,
  compose(applyMiddleware(...middleware)),
);

const getStore = () => store;
const getState = () => store.getState();

export {getStore, getState};
