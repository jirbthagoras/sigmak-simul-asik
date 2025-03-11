import bcrypt from "bcryptjs"
import { Request, Response } from "express"
import type { JwtPayload } from "jsonwebtoken"
import jwt from "jsonwebtoken"
import { renderToHtml } from "jsxte"
import { createElement } from "jsxte/jsx-runtime"
import { Users } from "../models/users"
import appConfig from "../utils/envConfig"
import { AlertMessage } from "../views/components/alertMessage"

export const loginPage = (req: Request, res: Response) => {
  // check if cookie exist
  const token = req.cookies["authToken"]
  if (token) {
    // validate token
    try {
      jwt.verify(token, appConfig.jwtSecret!) as JwtPayload
      res.redirect("/dashboard")
    } catch (error) {
      console.error("Error login page", error)
      // res.clearCookie("authToken")
      // res.render("pages/login")
    }
  }

  res.render("pages/login")
}

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body

    // check if account exist
    const user = await Users.findOne({ where: { email } })
    if (!user) return res.status(404).send("User not found")

    // create JWT payload
    const payload = {
      userId: user.userId,
    }

    // validate password
    const validatePassword = await bcrypt.compare(password, user.password)
    if (validatePassword) {
      // create JWT token
      const token = jwt.sign(payload, appConfig.jwtSecret!, {
        expiresIn: "8h",
      })

      // set cookie
      // res.header("HX-Redirect", "/dashboard")
      res.cookie("authToken", token, {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
        sameSite: "strict",
      })

      res.redirect("/dashboard")
    } else {
      // password does not match
      console.error("Incorrect Username or Password")
      res.status(403).send(
        renderToHtml(
          createElement(AlertMessage, {
            level: "error",
            message: "Incorrect Username or Password",
          })
        )
      )
    }
  } catch (error) {
    console.error("Login Error", error)
    res.status(500).send(
      renderToHtml(
        createElement(AlertMessage, {
          level: "error",
          message: "Something went wrong",
        })
      )
    )
  }
}

export const registerPage = async (req: Request, res: Response) => {
  // check if cookie exist
  const token = req.cookies["authToken"]
  if (token) {
    // verify token
    try {
      jwt.verify(token, appConfig.jwtSecret!) as JwtPayload
      res.status(301).redirect("/dashboard")
    } catch (error) {
      res.clearCookie("authToken")
      res.render("pages/register")
    }
  } else {
    res.render("pages/register")
  }
}

export const register = async (req: Request, res: Response) => {
  try {
    const {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
    } = req.body

    // check if required field is empty
    if (!firstName || !email || !password)
      return res.status(403).send("All fields are required")

    // check if email already exist
    const user = await Users.findOne({ where: { email } })
    if (user)
      return res.status(409).send(
        renderToHtml(
          createElement(AlertMessage, {
            level: "warn",
            message: "User already exist",
          })
        )
      )

    // hash password
    const hashPassword = await bcrypt.hash(password, 10)

    // create user
    await Users.create({
      firstName,
      lastName,
      email,
      password: hashPassword,
      fullName: lastName ? `${firstName} ${lastName}` : firstName,
    })

    // response
    res.header("HX-Redirect", "/login")
    res.status(200).send("Register Success")
  } catch (error) {
    console.error("User registration failed. Error: ", error)
    res.status(500).send(
      renderToHtml(
        createElement(AlertMessage, {
          level: "error",
          message: "Something went wrong",
        })
      )
    )
  }
}

export const logout = (_req: Request, res: Response) => {
  res.clearCookie("authToken")
  res.redirect("/login")
}
