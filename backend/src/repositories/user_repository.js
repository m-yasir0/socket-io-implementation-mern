const {
  models: { User },
} = require('../db/models/index')

const findUser = (_id) => {
  return User.findOne({ _id }).select('-password')
}

const listUsers = () => {
  return User.find().select('-password')
}

module.exports = { findUser, listUsers }
