import express from 'express';
import cors from 'cors';
import serialize from 'serialize-javascript';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { matchPath, StaticRouter } from 'react-router-dom';

import App from '../lib/App.js';
import { fetchPopularRepos } from '../lib/api.js';
import routes from '../lib/routes.js';

const app = express();

app.use(cors());

app.use(express.static('public'));

app.get('*', (req, res, next) => {
  const activeRoute = routes.find((route => matchPath(req.url, route))) || {};
  const promise = activeRoute.fetchInitialData
    ? activeRoute.fetchInitialData(req.path)
    : Promise.resolve();

  promise.then(data => {
    const context = { data };
    const markup = renderToString(
      <StaticRouter location={req.url} context={context}>
        <App data={data}/>
      </StaticRouter>
    );

    res.send(`
      <html>
        <head>
          <title>SSR title</title>
          <script src="/bundle.js" defer></script>
          <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
        </head>
        <body>
          <div id="app">${ markup }</div>
        </body>
      </html>
    `);
  })
});

app.listen(3000, () => { console.log('started listening...')});
