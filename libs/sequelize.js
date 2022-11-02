const { Sequelize } = require('sequelize');

const { config } = require('./../config/config');
const setupModels = require('./../db/models');

const options = {
    dialect: 'postgres',
    logging: config.isProd ? false : true,
}

if (config.isProd) {
    options.dialectOptions = {
        ssl: {
            rejectUnauthorized: false
        }
    }
}

const sequelize = new Sequelize(config.dbUrl, options);

setupModels(sequelize);
// sequelize.sync(); //sincronizamos los modelos con la db
//esto se usa mas que nada para testear.
module.exports = sequelize;