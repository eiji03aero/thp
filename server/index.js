const { createServer } = require('http');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/favicon.ico', (req, res) => res.status(204).send());
app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, '../public/build/index.html')));

const server = createServer(app);

server.listen(port, () => {
  console.log('started listening');
});
