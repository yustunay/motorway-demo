const { Pool } = require("pg");
const logger = require("../utils/logger"); // Make sure to import your logger module
const config = require("../config/config");

const pool = new Pool({
  host: config.db.host,
  port: config.db.port,
  user: config.db.user,
  password: config.db.password,
  database: config.db.database,
});

pool.on("error", (err, client) => {
  logger.error("Unexpected error on idle client:", err);
  process.exit(-1);
});

module.exports = pool;
