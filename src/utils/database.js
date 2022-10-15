const { Sequelize } = require('sequelize');
//* Importamos variables de entorno de nuestro archivo 'config.js'
const config = require('../config');

//* Usamos las variables de entorno
const db = new Sequelize({
  dialect: 'postgres',
  host: config.db.host,
  username: config.db.username,
  password: config.db.password,
  database: config.db.name,
});

module.exports = db;