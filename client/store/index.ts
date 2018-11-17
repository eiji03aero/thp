import { createStore as reduxCreateStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import { rootReducer } from '../modules';

export const sagaMiddleware = createSagaMiddleware();

export const createStore = (): Store => {
  return reduxCreateStore(
    rootReducer,
    applyMiddleware(
      sagaMiddleware,
      logger,
    )
  );
};
