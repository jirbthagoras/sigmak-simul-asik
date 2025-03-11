import fs from "fs"
import type { JwtPayload } from "jsonwebtoken"
import jwt from "jsonwebtoken"
import multer from "multer"
import path from "path"
import appConfig from "../utils/envConfig"

// configure disk storage for middleware file upload
export const diskStorage = multer.diskStorage({
  destination: (req, _, cb) => {
    // get token from cookie and verify
    const token = req.cookies["authToken"]

    try {
      const decode = jwt.verify(token, appConfig.jwtSecret!) as JwtPayload
      const storagePath = path.join(appConfig.storagePath, `${decode.userId}`)

      // create folder if not exist
      if (!fs.existsSync(storagePath))
        fs.mkdirSync(storagePath, { recursive: true })

      cb(null, storagePath)
    } catch (err) {
      cb(new Error(`File upload failed ${err}`), appConfig.storagePath)
    }
  },
  filename: (_, file, cb) => {
    cb(null, `${file.originalname}`)
  },
})
