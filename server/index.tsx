import { createServer } from 'http';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as serialize from 'serialize-javascript';

import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom";
import { ServerStyleSheet } from "styled-components";

import { App } from "../client/App";
import { createStore } from "../client/store";
import { renderTemplate } from "./render";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/favicon.ico', (req, res) => res.status(204).send());
app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore();
  const sheet = new ServerStyleSheet();
  const markup = renderToString(sheet.collectStyles(
    <StaticRouter location={req.url} context={{}}>
      <Provider store={store}>
        <App/>
      </Provider>
    </StaticRouter>
  ));
  const styles = sheet.getStyleTags();

  res.send(renderTemplate({
    markup: markup,
    styles: styles,
  }));
});

const server = createServer(app);

server.listen(port, () => {
  console.log('started listening');
});
