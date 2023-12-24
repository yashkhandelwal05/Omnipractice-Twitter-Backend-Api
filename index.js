const express = require('express');
const { launchServer } = require('./server');
const bodyParser = require('body-parser');
const connectDB = require('./db/connection');
const routes = require('./route');

const app = express();
app.use(bodyParser.json());
app.use('/twitter', routes);

connectDB();

launchServer(app);