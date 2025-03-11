import { Router } from "express"
import { login, register } from "../controllers/authController"

export const AuthRouter = Router()

// login
AuthRouter.post("/login", login)

// register
AuthRouter.post("/register", register)

// logout
AuthRouter.post("/logout", (_req, res) => {
  res.clearCookie("authToken", {
    httpOnly: true,
    sameSite: "strict",
  })
  res.redirect("/login")
})
