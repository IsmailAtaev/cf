
const Router = require('express')
const router = new Router()
// const multer = require('multer')
const UserController = require('../controllers/user')
// const authMiddleware = require('../middleware/authMiddleware')
// const registration = require('../middleware/registration')
// const registrationIMG = require('../middleware/registrationIMG')
// const loginMiddleware = require('../middleware/loginMiddleware')
// const updataUser = require('../middleware/updataUser')
// const path = require('path');


// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, path.join(__dirname, '..', 'public', 'profil'));
//     },
//     filename: function (req, file, cb) {
//         const uniqueSuffix = Date.now();
//         cb(null, uniqueSuffix + file.originalname);
//     }
// })
// const upload = multer({ storage: storage })



// /** Updata profil img*/
// const storageUpdata = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, path.join(__dirname, '..', 'public', 'profil'));
//     },
//     filename: function (req, file, cb) {
//         const uniqueSuffix = Date.now();
//         cb(null, uniqueSuffix + file.originalname);
//     }
// })
// const uploadUpdata = multer({ storage: storageUpdata })

router.get("/users", UserController.getUsers)
// router.post("/login", loginMiddleware, UserController.login)
router.post('/registration', UserController.registration)
// router.post('/registration-img', upload.single("file"), registrationIMG, UserController.registrationImg)
// router.post('/updata-img', uploadUpdata.single("file"), UserController.updateIMG)
// router.patch('/update', updataUser, UserController.updateUser)


module.exports = router;
