const app = require('./app')
const { mongoose } = require(__dirname + '/src/db/models')
const PORT = process.env.PORT || 5000

mongoose.connection.on('connected', () => {
  app.listen(PORT, () => {
    console.log(`Server Started listening on port ${PORT}`)
  })
})
mongoose.connection.on('error', () => {
  console.error('DB connection failed')
})
