const { Sequelize } = require('sequelize')
const { PORT, CLIENT_URL, DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = require('./conf')


module.exports = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    dialect: 'postgres',
    host: DB_HOST,
    port: DB_PORT
})