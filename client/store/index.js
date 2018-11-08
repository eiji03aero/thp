import { createStore as reduxCreateStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { rootReducer } from '../modules';

export const createStore = () => {
  return reduxCreateStore(
    rootReducer,
    applyMiddleware(
      thunk,
      logger,
    )
  );
};
