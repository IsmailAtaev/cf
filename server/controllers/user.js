const { SECRET_KEY_RANDOM } = require("../conf")
const { User } = require("../model/models")
const bcrypt = require("bcryptjs")
const fs = require('fs');
const path = require('path');



class UserController {

    async registration(req, res) {
        try {
            const { login, password, lastname, firstname, email, phoneNumber, role } = req.body;
            const candidate = await User.findOne({ where: { login } })
            if (candidate) {
                return res.status(400).json({ message: 'This login have' })
            }
            const hash = await bcrypt.hash(password, 7);
            const user = await User.create({
                login,
                password: hash,
                lastname,
                firstname,
                email,
                phoneNumber,
                departmentId,
                positionId,
                role
            })

            if (!user) {
                return res.status(500).json({ message: 'Do not registration user' })
            }

            return res.status(200).json({ message: 'Registration seccseful', data: user })
        } catch (e) {
            return res.status(400).json({ message: e.message })
        }
    }

    async login(req, res) {
        try {
            const { login, password } = req.body
            const candidate = await User.findOne({ where: { login } });
            if (!candidate) {
                return res.status(400).json({ message: ` Do not find ${login}` })
            }

            const validPassword = bcrypt.compareSync(password, candidate.password)
            if (!validPassword) {
                return res.status(400).json({ message: 'Is not correct password' })
            }

            return res.status(200).json({ user: candidate })
        } catch (e) {
            return res.status(400).json({ message: e.messages })
        }
    }

    async getUsers(req, res) {
        try {
            const users = await User.findAll({ attributes: { exclude: ['password', 'login'] } })
            return res.status(200).json(users)
        } catch (e) {
            return res.status(400).json({ message: e.message })
        }
    }

    async updateUser(req, res) {
        try {
            const { id, lastname, firstname, email, phoneNumber } = req.body;
            const candidate = await User.findOne({ where: { id } })
            if (!candidate) {
                return res.status(400).json({ message: 'Do not find user for update' })
            }
            const [updated] = await User.update(
                { surname, firstname, email, phoneNumber },
                { where: { id } });

            if (!updated) {
                return res.status(400).json({ message: 'User update failed' })
            }

            return res.status(200).json({ message: 'User updated successfully' });
        } catch (e) {
            return res.status(400).json({ message: 'Update user error' })
        }
    }

    async updateIMG(req, res) {
        try {
            if (!req.file || !req.file.filename) {
                return res.status(400).json({ error: "Select profil photo please" })
            }

            const img = req.file.filename;
            const { id } = req.body;

            if (!id) {
                return res.status(400).json({ error: "Do not sent user id" })
            }

            const candidate = await User.findOne({ where: { id } })
            if (!candidate) {
                return res.status(400).json({ message: 'Do not find user for update' })
            }

            if (candidate.img) {
                const profileDirectory = path.resolve(__dirname, '..', 'public', 'profil');
                const oldImagePath = path.join(profileDirectory, candidate.img);
                if (fs.existsSync(oldImagePath)) {
                    fs.unlinkSync(oldImagePath)
                } else {
                    throw new Error('Old image not found, skipping deletion')
                }
            }

            const [updated] = await User.update({ img }, { where: { id } })
            return res.status(200).json({ message: 'User profil photo updated successfully' })
        } catch (e) {
            return res.status(400).json({ message: 'Update user profil photo error' })
        }
    }
}


module.exports = new UserController()