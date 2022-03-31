const mysql = require("mysql2/promise");
const { logger } = require("./winston");
const secret = require("./secret");

const pool = mysql.createPool({
  host: secret.host,
  user: secret.user,
  port: secret.port,
  password: secret.password,
  database: secret.database,
});

module.exports = {
  pool: pool,
};
