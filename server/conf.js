const PORT = 6001; // ali port
const CLIENT_URL = "http://localhost:6000";
// const DB_NAME = "CabelFactory";
// const DB_USER = "isma";
// const DB_PASSWORD = "123456789"; // server db pass alemtilsimat
// const DB_HOST = "localhost";
// const DB_PORT = 5432;
const SECRET_KEY_RANDOM = "SECRET_KEY_RANDOM";


const DB_NAME = "cf";  // имя базы данных
const DB_USER = "postgres";          // имя пользователя
const DB_PASSWORD = "123456789"; // пароль
const DB_HOST = "localhost";     // хост
const DB_PORT = 5432;            // порт


module.exports = {
    PORT,
    CLIENT_URL,
    DB_NAME,
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_PORT,
    SECRET_KEY_RANDOM
}