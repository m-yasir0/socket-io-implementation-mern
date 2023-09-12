const express = require('express')
const dotenv = require('dotenv')
const http = require('http')
const socketIO = require('socket.io')

dotenv.config()

const app = express()
app.use(express.json())
const server = http.createServer(app)
const io = socketIO(server)

require(__dirname + '/src/sockets')(io)

module.exports = server
