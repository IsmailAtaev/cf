const Router = require('express')
const router = new Router()
const user = require('./user')
// const document = require('./document')
// const department = require('./department')
// const position = require('./position')
// const role = require('./role')
 

router.use('/user', user)
// router.use('/docs', document)
// router.use('/department', department)
// router.use('/position', position)
// router.use('/role', role)
 

module.exports = router