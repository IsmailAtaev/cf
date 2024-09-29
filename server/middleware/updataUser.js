const validateEmail = require("../helpers/validateEmail");
const validatePhoneNumber = require("../helpers/validatePhoneNumber");

module.exports = function (req, res, next) {
    try {
        const { id, surname, firstname, email, phoneNumber } = req.body;

        if (!id || !surname || !firstname) {
            return res.status(400).json({ error: "surname and firstname is empty" });
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