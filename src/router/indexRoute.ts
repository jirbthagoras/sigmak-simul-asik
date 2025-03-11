import { Router } from "express"
import { loginPage, registerPage } from "../controllers/authController"

export const IndexRouter = Router()

IndexRouter.get("/", (_req, res) => {
  res.render("pages/main")
})

IndexRouter.get("/home", (_req, res) => {
  res
    .status(200)
    .send("You found home page. Welcome! I hope you enjoy your day :D")
})

IndexRouter.get("/login", loginPage)

IndexRouter.get("/register", registerPage)
