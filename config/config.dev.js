'use strict';
module.exports = appInfo => {
  const config = exports = {};
  console.log(appInfo);
  config.sequelize = {
    dialect: 'mysql',
    host: '10.100.162.210',
    port: '3306',
    username: 'admin',
    password: '123456',
    database: 'egg_operation',
  };
  return config;
};
