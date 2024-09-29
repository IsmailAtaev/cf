const validateEmail = require('../helpers/validateEmail')
const validatePhoneNumber = require('../helpers/validatePhoneNumber')



module.exports = function (req, res, next) {
    try {
        if (!req.file || !req.file.filename) {
            return res.status(400).json({ error: "Phote do not select, please select profil photo" });
        }

        const { login, password, surname, firstname, email, phoneNumber } = req.body;

        if (!login || !password || !surname || !firstname) {
            return res.status(400).json({ error: "Login and Password are required" });
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