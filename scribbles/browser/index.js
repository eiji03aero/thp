import React from "react";
import { hydrate } from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import App from "../lib/App.js";

hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app'),
);
