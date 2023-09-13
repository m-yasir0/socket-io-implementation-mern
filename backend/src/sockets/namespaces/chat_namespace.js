const { findUser } = require('../../repositories/user_repository')

module.exports = function (io) {
  const chatNamespace = io.of('/chat')

  const isValidUser = async (id) => {
    try {
      const user = await findUser(id)
      return user
    } catch (error) {
      return false
    }
  }

  chatNamespace.use(async (socket, next) => {
    /**
     * Use any authentication method
     * I am simply adding auth as if user is present and valid
     * You can use jwt instead
     */

    if (socket.authenticated_user) {
      next()
    } else {
      const validUser = await isValidUser(
        socket.handshake.headers.authorization,
      )
      if (validUser) {
        socket['authenticated_user'] = validUser
        next()
      } else {
        next(new Error('Unauthorzied'))
      }
    }
  })

  chatNamespace.on('connection', (socket) => {
    socket.on('error', (err) => {
      socket.emit('error', { message: err.message })
      if (err.message === 'Unauthorzied') {
        socket.disconnect()
      }
    })
  })

  return chatNamespace
}
