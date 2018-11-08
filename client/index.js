import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import { App } from "./App.js";
import * as actions from './modules/System.js';

import { createStore } from "./store";

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.querySelector('#app-root')
);

store.dispatch(actions.bootApp());
