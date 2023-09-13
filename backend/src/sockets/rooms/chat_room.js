const chatNamespace = require('../namespaces/chat_namespace')
const connectedUsers = new Map()
module.exports = function (io) {
  const namespace = chatNamespace(io)
  const chatRoom = namespace.to('chat-room')
  namespace.on('connection', (socket) => {
    socket.join('chat-room')
    connectedUsers.set(socket.authenticated_user._id.toString(), socket)

    socket.on('private_message', ({ to, message }) => {
      const targetScoket = connectedUsers.get(to)
      targetScoket.emit('message', {
        from: socket.authenticated_user._id,
        message,
      })
    })

    socket.on('disconnect', () => {
      connectedUsers.delete(socket.authenticated_user._id.toString())
    })
  })

  return chatRoom
}
