const sequelize = require('../database')
const { DataTypes } = require('sequelize')


const User = sequelize.define('user', {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    login: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING, unique: true },
    firstname: { type: DataTypes.STRING },
    lastname: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    phoneNumber: { type: DataTypes.STRING },
    img: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING },
})
