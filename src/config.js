//* Habilita el acceso a las variables de entorno
//* Primer manera de importacion:
require("dotenv").config();

//* Segunda manera de importacion:
//! const dotenv = require('dotenv');
//! dotenv.config();

//* Asignar valores por defecto
const config = {
  port: process.env.PORT || 9000,
  nodeEnv: process.env.NODE_ENV || "development",
  db: {
    port: process.env.DB_PORT || 5432,
    username: process.env.DB_USERNAME || "postgres",
    password: process.env.DB_PASSWORD || "postgres",
    host: process.env.DB_HOST || "localhost",
    name: process.env.DB_NAME,
  },
};

module.exports = config;