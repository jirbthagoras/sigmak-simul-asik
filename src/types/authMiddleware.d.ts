declare namespace Express {
  export interface Request {
    user: string | JwtPayload
    token: string
  }
}
