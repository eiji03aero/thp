import { createServer } from 'http';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import serialize from 'serialize-javascript';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom";

import { App } from "../client/App.js";
import { createStore } from "../client/store";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/favicon.ico', (req, res) => res.status(204).send());
app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore();
  const markup = renderToString(
    <StaticRouter location={req.url} context={{}}>
      <Provider store={store}>
        <App/>
      </Provider>
    </StaticRouter>
  );

  res.send(`
    <html>
      <head>
        <title>THP</title>
        <script src="/build/bundle.js" defer></script>
      </head>
      <body>
        <div id="app-root">${ markup }</div>
      </body>
    </html>
  `);
});

const server = createServer(app);

server.listen(port, () => {
  console.log('started listening');
});
