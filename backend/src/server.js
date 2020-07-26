const express = require('express');
//const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const routes = require('./routes');
const app = express();
const server = require('http').Server(app);

app.disable('x-powered-by')

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))
app.use(routes);

server.listen(3333);