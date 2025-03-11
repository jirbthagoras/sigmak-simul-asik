import dotenv from "dotenv"
import path from "path"

dotenv.config({ path: path.join(__dirname, `../../.env`) })

const appConfig = {
  nodeEnv: String(process.env.NODE_ENV) || "dev",
  port: Number(process.env.PORT!) || 3000,
  appUrl: String(process.env.APP_URL) || "localhost",
  name: String(process.env.APP_NAME),
  jwtSecret: process.env.JWT_SECRET,
  storagePath:
    process.env.STORAGE_PATH || path.join(__dirname, "../../storage"),
  sequelize: {
    database: process.env.RDS_DB_NAME || process.env.DB_NAME!,
    username: process.env.RDS_USERNAME || process.env.DB_USERNAME!,
    password: process.env.RDS_PASSWORD || process.env.DB_PASSWORD!,
    host: process.env.RDS_HOSTNAME || process.env.DB_HOST!,
    port: Number(process.env.RDS_PORT) || Number(process.env.DB_PORT) || 3306,
    engine: process.env.DB_TYPE!,
  },
}

export default appConfig
