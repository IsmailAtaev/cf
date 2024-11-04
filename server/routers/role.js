
const Router = require('express')
const router = new Router()
const RoleController = require("../controllers/role")



router.post('/create', RoleController.create)


module.exports = router;
