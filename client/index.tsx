import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";

import { App } from "./App";
import { bootApp } from "./modules/System";

import { createStore, sagaMiddleware, history } from "./store";
import { rootSaga } from "./sagas";

const store = createStore();
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>,
  document.querySelector('#app-root')
);

store.dispatch(bootApp());
