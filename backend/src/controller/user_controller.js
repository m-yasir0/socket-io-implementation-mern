const { listUsers } = require('../repositories/user_repository')

const listAllUsers = async (_req, res, next) => {
  try {
    const users = await listUsers()
    res.json({ users })
  } catch (error) {
    next(error)
  }
}

module.exports = { listAllUsers }
