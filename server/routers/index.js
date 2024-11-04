const Router = require('express')
const router = new Router()
const user = require('./user')
const role = require('./role')

router.use('/user', user)
router.use('/role', role)

module.exports = router