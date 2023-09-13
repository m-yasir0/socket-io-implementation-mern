const { Router } = require('express')
const userRoutes = require(__dirname + '/user_routes.js')
const router = Router()

router.use('/users', userRoutes)

module.exports = router
