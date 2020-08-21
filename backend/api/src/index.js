// Imports
import express from 'express';

// App Imports
import database from './setup/server/database';
import middlewares from './setup/server/middlewares';
import start from './setup/server/start';

import pageRouter from './modules/page/router';

// Create express server
const server = express();

//const apiPort = 4000;

// Connect database
database();

// Setup middlewares
middlewares(server);

server.get('/', (req, res) => {
    res.send('Hello World!');
});

server.use('/api', pageRouter)

// Start server
start(server);