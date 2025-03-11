import { Request, Response } from "express"
import fs from "fs"
import type { JwtPayload } from "jsonwebtoken"
import jwt from "jsonwebtoken"
import { renderToHtml } from "jsxte"
import { createElement } from "jsxte/jsx-runtime"
import path from "path"
import { loadBackupFiles } from "../models/diskStorage"
import { BackupFilesMetadata } from "../models/files"
import appConfig from "../utils/envConfig"
import { fileSizeToString, timeToString } from "../utils/formatter"
import { RowTable } from "../views/components/rowTable"

export const dashboardPage = async (req: Request, res: Response) => {
  try {
    // get token from cookie and verify
    const token = req.cookies["authToken"]
    const decode = jwt.verify(token, appConfig.jwtSecret!) as JwtPayload

    const files = await loadBackupFiles(`${decode.userId}`)

    res.render("pages/dashboard", { files })
  } catch (error) {
    console.error("Error in dashboard", error)
    res.redirect("/login")
  }
}

export const getFiles = async (req: Request, res: Response) => {
  const { filterby, sort } = req.query
  const token = req.cookies["authToken"]
  const decode = jwt.verify(token, appConfig.jwtSecret!) as JwtPayload

  const files = await loadBackupFiles(`${decode.userId}`)

  // toggle filter for files from param query
  switch (filterby) {
    case "date":
      sort === "asc"
        ? files.sort(
            (a, b) => a.lastModified.getTime() - b.lastModified.getTime()
          )
        : files.sort(
            (a, b) => b.lastModified.getTime() - a.lastModified.getTime()
          )
      break
    case "size":
      sort === "asc"
        ? files.sort((a, b) => a.size - b.size)
        : files.sort((a, b) => b.size - a.size)
      break
    case "name":
      sort === "asc"
        ? files.sort((a, b) => a.name.localeCompare(b.name))
        : files.sort((a, b) => b.name.localeCompare(a.name))
      break
    default:
      break
  }

  let elements = ""
  files.forEach((file) => {
    elements += renderToHtml(
      createElement(RowTable, {
        name: file.name,
        lastModified: timeToString(file.lastModified),
        fileSize: fileSizeToString(file.size),
      })
    )
  })

  res.status(200).send(elements)
}

export const uploadFiles = async (req: Request, res: Response) => {
  const uploadedFiles = req.files as Express.Multer.File[]
  // check if file is empty
  if (uploadedFiles.length === 0)
    return res.status(400).send("File is required")

  // get token from cookie and verify
  const token = req.cookies["authToken"]
  const decode = jwt.verify(token, appConfig.jwtSecret!) as JwtPayload

  let response = ""
  uploadedFiles.forEach((file: Express.Multer.File) => {
    // append
    response += renderToHtml(
      createElement(RowTable, {
        name: file.originalname,
        lastModified: timeToString(new Date()),
        fileSize: fileSizeToString(file.size),
      })
    )

    // save file metadata to database
    BackupFilesMetadata.findOrCreate({
      where: {
        name: file.originalname,
        path: file.destination,
        userId: decode.userId,
      },
      defaults: {
        name: file.originalname,
        ext: file.originalname.split(".").pop(),
        mimeType: file.mimetype,
        path: file.destination,
        size: file.size,
        lastModified: new Date(),
        userId: decode.userId,
      },
    })
  })

  res.status(200).send(response)
}

export const downloadSingleFile = async (req: Request, res: Response) => {
  const { name } = req.query

  // get token from cookie and verify
  const token = req.cookies["authToken"]
  const decode = jwt.verify(token, appConfig.jwtSecret!) as JwtPayload

  // check if filename is empty
  if (!name) return res.status(400).send("Filename is required")

  try {
    res.download(
      path.join(appConfig.storagePath, `${decode.userId}`, name.toString())
    )
  } catch (err) {
    res.status(500).send("Failed to download file")
  }
}

export const deleteSingleFile = async (req: Request, res: Response) => {
  const { name } = req.params
  const token = req.cookies["authToken"]

  // check if filename is empty
  if (!name) return res.status(400).send("Filename is required")

  // verify jwt
  const decode = jwt.verify(token, appConfig.jwtSecret!) as JwtPayload

  // check if file exist in database then delete
  const file = await BackupFilesMetadata.findOne({
    where: { name, userId: decode.userId },
  })
  if (file) file.destroy()

  try {
    await fs.promises.unlink(
      path.join(appConfig.storagePath, `${decode.userId}`, name.toString())
    )
    res.status(200).send("File successfully deleted")
  } catch (err) {
    res.status(500).send("Failed to delete file")
  }
}
