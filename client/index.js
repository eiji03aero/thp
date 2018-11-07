import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import { TerminalContainer } from "./containers/TerminalContainer.js";
import { createStore } from "./store";

const store = createStore();

const App = props => (
  <Provider store={store}>
    <TerminalContainer/>
  </Provider>
);

ReactDOM.render(<App/>, document.querySelector('#app-root'));
