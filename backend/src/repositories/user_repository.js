const {
  models: { User },
} = require('../db/models/index')

const findUser = async (_id) => {
  return User.findOne({ _id })
}

module.exports = { findUser }
