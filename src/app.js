const express = require('express');
const serverConfig = require('./config/server');
const queryRoutes = require('./routes/query.routes');

const app = express();

app.use(express.json());
app.use('/query', queryRoutes);

serverConfig(app);
