const { Role } = require("../model/models")


class RoleController {

    async create(req, res) {
        try {
            const { roleName, permissions } = req.body;
            if (!roleName || !permissions) {
                return res.status(400).json({ message: "request error" })
            }

            const role = await Role.create({ name: roleName, permissions })

            if (!role) {
                return res.status(500).json({ message: 'Do not create role' })
            }

            return res.status(200).json({ message: 'Registration seccseful', data: user })
        } catch (e) {
            return res.status(400).json({ message: e.message })
        }
    }



    // async getUsers(req, res) {
    //     try {
    //         const users = await User.findAll({ attributes: { exclude: ['password', 'login'] } })
    //         return res.status(200).json(users)
    //     } catch (e) {
    //         return res.status(400).json({ message: e.message })
    //     }
    // }


}


module.exports = new RoleController()