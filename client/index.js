import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { App } from "./App.js";
import { bootApp } from "./sequences/bootApp.js";

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
