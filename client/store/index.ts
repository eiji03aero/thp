import { createStore as reduxCreateStore, applyMiddleware, Store } from 'redux';
import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import { createRootReducer } from '../modules';

export const sagaMiddleware = createSagaMiddleware();

export const history = createBrowserHistory();

export const createStore = (): Store => {
  return reduxCreateStore(
    createRootReducer(history),
    applyMiddleware(
      routerMiddleware(history),
      sagaMiddleware,
      logger,
    )
  );
};
