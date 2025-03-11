import cookieParser from "cookie-parser"
import express from "express"
import fs from "fs"
import helmet from "helmet"
import https from "https"
import { expressExtend } from "jsxte"
import path from "path"
import { connect } from "./config/sequelize"
import { verifyAuth } from "./middlewares/authMiddleware"
import { AuthRouter } from "./router/authRoute"
import { DashboardRouter } from "./router/dashboardRoute"
import { IndexRouter } from "./router/indexRoute"
import { NotFoundRouter } from "./router/notFoundRoute"
import envConfig from "./utils/envConfig"

const app = express()

app.use(
  helmet({
    contentSecurityPolicy:
      envConfig.nodeEnv === ("dev" || "development")
        ? false
        : {
            directives: {
              "script-src": ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
            },
          },
  })
)

app.use(cookieParser())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// connect to database
try {
  console.log("Connecting to Database...")
  connect()
} catch (error) {
  console.error("Database Connection Error", error)
}

// setup jsx as template engine
expressExtend(app)
app.set("views", path.resolve(__dirname, "views"))

// serve static files
app.use("/static", express.static(path.resolve(__dirname, "views", "static")))

// main router
app.use("/", IndexRouter)

// router for auth
app.use("/auth", AuthRouter)

// router for dashboard
app.use("/dashboard", verifyAuth, DashboardRouter)

// fallback router if not found anypath
app.use(NotFoundRouter)

// for production
if (envConfig.nodeEnv === "prod" || envConfig.nodeEnv === "production") {
  console.log("Starting Production Server...")
  try {
    const prod = https.createServer(
      {
        key: fs.readFileSync(path.join(__dirname, "cert", "key.pem"), "utf8"),
        cert: fs.readFileSync(
          path.join(__dirname, "cert", "server.crt"),
          "utf8"
        ),
      },
      app
    )

    prod.listen(envConfig.port, () => {
      console.log(
        `Server started: https://${envConfig.appUrl}:${envConfig.port}/`
      )
    })
  } catch (err) {
    throw new Error(`Error in production server: ${err}`)
  }
} else {
  // for development
  app.listen(envConfig.port, () => {
    console.log(`Server started:http://${envConfig.appUrl}:${envConfig.port}`)
  })
}
