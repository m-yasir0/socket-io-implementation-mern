const { Router } = require('express')
const { listAllUsers } = require('../../controller/user_controller')
const router = Router()

router.get('/list', listAllUsers)

module.exports = router
