const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) { 
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.JAWSDB_DATABASE,
    process.env.JAWSDB_USERNAME,
    process.env.JAWSDB_PASSWORD,
    {
      host: process.env.JAWSDB_URL,
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;
