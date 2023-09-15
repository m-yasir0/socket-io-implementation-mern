const express = require('express');
const dotenv = require('dotenv');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors');
const errorHandler = require('./src/middleware/errorHandler');
const indexRoutes = require(__dirname + '/src/routes/index.js');

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = socketIO(server);
require(__dirname + '/src/sockets')(io);

app.use(express.json());
app.use(cors());
app.use(indexRoutes);
app.use(errorHandler);

module.exports = server;
