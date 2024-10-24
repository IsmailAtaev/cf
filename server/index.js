const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const sequelize = require('./database')
const { PORT } = require("./conf")
const router = require('./routers/index');

/**
 * @author Atayev Ismayyl 
 * 
 */


const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.use(cookieParser())
app.use('/static', express.static('public')) // server ubuntu
app.use('/api', router)



//app.use(cors({ origin: 'http://localhost:4011' })) 
//app.use(cors({ credentials: true, origin: "*" })); // glavny main bashy
//app.use('/public/docs', express.static('public/docs'))
// app.use('/public/profil', express.static('public/profil'))




const main = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync({ alter: true })
        app.listen(PORT, () => console.log(`server started on port ${PORT}`)) // PORT = 4011 server ubuntu
    } catch (e) {
        console.log(e)
    }
};

main()