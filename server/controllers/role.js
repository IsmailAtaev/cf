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

            return res.status(200).json({ message: 'Permissions create seccseful', })
        } catch (e) {
            return res.status(400).json({ message: e.message })
        }
    }



    async getRoles(req, res) {
        try {
            const roles = await Role.findAll();
            return res.status(200).json( {message: "Seccseful", data: roles});
        } catch (e) {
            return res.status(400).json({ message: e.message })
        }
    }


    async updateRole(req, res) {
        try {
            const {id, permissions } = req.body;
            if (!id || !permissions) {
                return res.status(400).json({ message: "request error" })
            }
            
            const [updated] = await Role.update({ permissions }, { where: { id } }  );
            if (!updated) {
                return res.status(400).json({ message: "Do not update permissions id: " + id })
            }
            return res.status(400).json({ message: "Seccseful" })
        } catch (e) {
            return res.status(400).json({ message: e.message })
        }
    }




}


module.exports = new RoleController()