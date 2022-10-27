const { Sequelize } = require('sequelize');

const { config } = require('./../config/config');
const setupModels = require('./../db/models');

const USER = (config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
    dialect: 'postgres',
    logging: true,
});

setupModels(sequelize);
// sequelize.sync(); //sincronizamos los modelos con la db
//esto se usa mas que nada para testear.
module.exports = sequelize;