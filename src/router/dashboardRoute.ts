import { Router } from "express"
import multer from "multer"
import { diskStorage } from "../config/diskStorage"
import {
  dashboardPage,
  deleteSingleFile,
  downloadSingleFile,
  getFiles,
  uploadFiles,
} from "../controllers/dashboardController"

// setup middleware for file upload
const uploads = multer({ storage: diskStorage })

// Dashboard router
export const DashboardRouter = Router()

// GET main page
DashboardRouter.get("/", dashboardPage)

DashboardRouter.get("/data", getFiles)

// POST upload / backup new file
DashboardRouter.post("/backup", uploads.array("upload-files"), uploadFiles)

// DELETE specific backup file
DashboardRouter.delete("/backup/:name", deleteSingleFile)

// GET download specific backup file
DashboardRouter.get("/backup", downloadSingleFile)
