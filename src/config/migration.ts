import appConfig from "../utils/envConfig"

const config = {
  username: appConfig.sequelize.username,
  password: appConfig.sequelize.password,
  database: appConfig.sequelize.database,
  host: appConfig.sequelize.host,
  dialect: appConfig.sequelize.engine,
}

module.exports = {
  development: config,
  test: config,
  production: config,
}
