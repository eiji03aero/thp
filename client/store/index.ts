import { createStore as reduxCreateStore, applyMiddleware, Store } from 'redux';
import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory, createMemoryHistory } from "history";
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import { createRootReducer } from '../modules';

export const sagaMiddleware = createSagaMiddleware();

export const history = process.env.Browser
  ? createBrowserHistory()
  : createMemoryHistory();

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
