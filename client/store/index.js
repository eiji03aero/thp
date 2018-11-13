import { createStore as reduxCreateStore, applyMiddleware } from 'redux';
import * as thunk from 'redux-thunk';
import * as logger from 'redux-logger';
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
