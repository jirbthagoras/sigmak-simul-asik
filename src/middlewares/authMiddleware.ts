import { NextFunction, Request, RequestHandler, Response } from "express"
import type { JwtPayload } from "jsonwebtoken"
import jwt from "jsonwebtoken"
import appConfig from "../utils/envConfig"

export const verifyAuth: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // extract jwt
    const token =
      req.token ||
      req.cookies["authToken"] ||
      req.body["authToken"] ||
      req.header("Authorization")?.split(" ")[1]

    // force to login page if token is missing
    if (!token) return res.redirect("/login")

    // verify token
    try {
      const decode = jwt.verify(token, appConfig.jwtSecret!) as JwtPayload
      req.token = token
      req.user = decode.userId
    } catch (error) {
      console.error("Invalid Token", error)
      res.redirect("/login")
    }

    next()
  } catch (error) {
    console.error("Auth Middleware Error", error)
    // res.status(401).send("Error Middleware Auth")
    res.redirect("/login")
  }
}
