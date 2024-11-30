
const Router = require('express')
const router = new Router()
const RoleController = require("../controllers/role")



router.post('/create', RoleController.create)
router.get('/get/roles', RoleController.getRoles)
router.put('/update/permission', RoleController.updateRole)




module.exports = router;
