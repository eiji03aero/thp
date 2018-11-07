import { createStore as reduxCreateStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { rootReducer } from '../modules';

export const createStore = () => {
  return reduxCreateStore(
    rootReducer,
    applyMiddleware(
      logger,
    )
  );
};
