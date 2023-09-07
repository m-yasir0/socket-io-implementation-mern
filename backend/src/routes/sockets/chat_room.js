const socketIo = require('socket.io')
const http = require('http')

const app = require('../../../app')

const server = http.createServer(app)

const io = socketIo(server, {
  cors: {
    origin: 'http://localhost:3000',
  },
})

io.on('connection', (socket) => {
  // console.log('client connected: ', socket.id)

  socket.join('chat-room')

  socket.on('disconnect', (reason) => {
    console.log(reason)
  })
})
