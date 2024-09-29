const validateEmail = require('../helpers/validateEmail')
const validatePhoneNumber = require('../helpers/validatePhoneNumber')



module.exports = function (req, res, next) {
    try {
        const { login, password, surname, firstname, email, phoneNumber, departmentId, positionId, roleId } = req.body;

        if (!login || !password || !surname || !firstname || !departmentId || !positionId || !roleId) {
            return res.status(400).json({ error: "Error required" });
        }

        if (login.trim() === "" || password.trim() === "") {
            return res.status(400).json({ error: "Do not empty Login and Password" });
        }

        if (password.length < 4 || password.length > 10) {
            return res.status(400).json({ error: "Password must be between 4 and 10 characters" });
        }

        if (!validateEmail(email)) {
            return res.status(400).json({ error: "Email do not corect" });
        }

        if (!validatePhoneNumber(phoneNumber)) {
            return res.status(400).json({ error: "Phone number do not corect" });
        }
        next();
    } catch (e) {
        return res.status(403).json({ message: 'User do not registration' })
    }
}