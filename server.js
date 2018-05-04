// yarn init -y
// yarn install
// yarn add express
// yarn add helmet -> npm i helmet
// npm i knex
// npm i sqlite3
// yarn add nodemon --dev
// npm i cors

// Importing Node Modules
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const projectsRouter = require('./projects/projectsRouter.js');
// const actionsRouter = require('./actions/actionsRouter.js');

// Server Code
const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/projects', projectsRouter);
// server.use('/api/actions', actionsRouter);

const port = 5000;
server.listen(port, () =>
    console.log('Amanda is listening to Port 5000'));