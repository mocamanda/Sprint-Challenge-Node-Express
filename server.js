// yarn init -y
// yarn install
// yarn add express
// yarn add helmet -> npm i helmet
// npm i knex
// npm i sqlite3
// yarn add nodemon --dev

// Importing Node Modules
const express = require('express');

const helmet = require('helmet');

// Server Code
const server = express();

const port = 5000;
server.listen(port, () =>
    console.log('\n== Amanda is listening to Port 5000 ==\n'));