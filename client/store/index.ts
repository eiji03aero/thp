import { createStore as reduxCreateStore, applyMiddleware } from 'redux';
import thunk, { ThunkMiddleware} from 'redux-thunk';
import logger from 'redux-logger';

import { rootReducer, RootStoreState, RootActions } from '../modules';

export const createStore = () => {
  return reduxCreateStore(
    rootReducer,
    applyMiddleware(
      thunk as ThunkMiddleware<RootStoreState, RootActions>,
      logger,
    )
  );
};
