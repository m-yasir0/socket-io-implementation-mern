module.exports = (io) => {
  require(__dirname + '/namespaces/chat_namespace.js')(io)
  require(__dirname + '/rooms/chat_room.js')(io)
}
