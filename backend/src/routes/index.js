const { Router } = require('express')
const v1Router = require(__dirname + '/v1/index')
const router = Router()

router.use('/v1', v1Router)

module.exports = router
