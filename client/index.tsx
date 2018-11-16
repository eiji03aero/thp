import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { App } from "./App";
import { bootApp } from "./sequences/bootApp";

import { createStore } from "./store";

const store = createStore();

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>,
  document.querySelector('#app-root')
);

store.dispatch(bootApp());
