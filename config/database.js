const mySql = require("mysql");

const dbConnection = function () {
  return mySql.createConnection({
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
  });
};

module.exports = function () {
  return dbConnection;
};
