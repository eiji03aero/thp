import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { App } from "./App";
import { bootApp } from "./modules/System";

import { createStore, sagaMiddleware } from "./store";
import { rootSaga } from "./sagas";

const store = createStore();
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>,
  document.querySelector('#app-root')
);

store.dispatch(bootApp());
