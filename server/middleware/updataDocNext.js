
module.exports = function (req, res, next) {
    try {
        if (req.body.shareDocUpdate && Array.isArray(req.body.shareDocUpdate) && req.body.shareDocUpdate.length > 0) {
            next()
        } else {
            return res.status(400).json({ error: "shareDocUpdate не содержит данных или отсутствует." })
        }
    } catch (e) {
        return res.status(403).json({ message: 'Server error middleware' })
    }
}