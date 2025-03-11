import { Dialect, Sequelize } from "sequelize"
import appConfig from "../utils/envConfig"

const {
  database: dbName,
  host,
  username,
  password,
  port,
  engine,
} = appConfig.sequelize

export const database = new Sequelize(dbName, username, password, {
  host,
  port,
  dialect: engine as Dialect,
  logging: appConfig.nodeEnv === ("dev" || "development") ? console.log : false,
})

export const connect = async () => {
  try {
    await database.authenticate()
    console.log("Connection has been established successfully.")
    return true
  } catch (error) {
    console.error("Unable to connect to the database:", error)
    return false
  }
}
