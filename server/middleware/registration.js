const validateEmail = require('../helpers/validateEmail')
const validatePhoneNumber = require('../helpers/validatePhoneNumber')


module.exports = function (req, res, next) {
    try {
        const { login, password, lastname, firstname, email, phoneNumber } = req.body;

        if (!login || !password || !lastname || !firstname) {
            return res.status(400).json({ message: "Error required" });
        }

        if (login.trim() === "" || password.trim() === "") {
            return res.status(400).json({ message: "Do not empty Login and Password" });
        }

        if (password.length < 4 || password.length > 10) {
            return res.status(400).json({ message: "Password must be between 4 and 10 characters" });
        }

        if (!validateEmail(email)) {
            return res.status(400).json({ message: "Email do not corect" });
        }

        if (!validatePhoneNumber(phoneNumber)) {
            return res.status(400).json({ message: "Phone number do not corect" });
        }
        next();
    } catch (e) {
        return res.status(403).json({ message: 'User do not registration' })
    }
}