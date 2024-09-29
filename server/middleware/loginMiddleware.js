module.exports = function (req, res, next) {
    try {
        const { login, password } = req.body;
        if (!login || !password) {
            return res.status(400).json({ error: "Login and Password are required" });
        }

        if (login.trim() === "" || password.trim() === "") {
            return res.status(400).json({ error: "Do not empty Login and Password" });
        }
        next();
    } catch (e) {
        return res.status(403).json({ message: 'User do not registration' })
    }
}