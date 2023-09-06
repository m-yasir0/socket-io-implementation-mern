'use strict'

module.exports = {
  up: (models, mongoose) => {
    return models.User.insertMany([
      { name: 'User1', email: 'user1@gmail.com' },
      { name: 'User2', email: 'user2@gmail.com' },
    ]).then((res) => {
      console.log(res.insertedCount)
    })
  },

  down: (models, mongoose) => {
    return models.User.deleteMany({
      $or: [{ email: 'user1@gmail.com' }, { email: 'user2@gmail.com' }],
    }).then((res) => {
      console.log('Deleted!')
    })
  },
}
