const jwt = require('jsonwebtoken')
const { SECRET_KEY_RANDOM } = require("../config");


module.exports = function (req, res, next) {
    if (req.method === 'OPTIONS') {
        next()
    }
    
    try {
        const token = req.headers.authorization.split(' ')[1]
        if (!token) {
            return res.status(403).json({ message: 'User do not authorization' })
        }
        const decodeData = jwt.verify(token, SECRET_KEY_RANDOM)
        req.user = decodeData
        next()
    } catch (e) {
        return res.status(403).json({ message: 'User do not authorization' })
    }
}