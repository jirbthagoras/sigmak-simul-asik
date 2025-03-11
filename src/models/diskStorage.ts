import fs from "fs"
import { readdir } from "fs/promises"
import path from "path"
import { IFileMetadata } from "../types/fileMetadata"
import appConfig from "../utils/envConfig"

export const loadBackupFiles = async (
  userPath?: string
): Promise<IFileMetadata[]> => {
  // get all files from spesific dir
  const loadedFiles: IFileMetadata[] = []

  const storagePath = userPath
    ? path.join(appConfig.storagePath, userPath)
    : path.resolve(appConfig.storagePath)
  // const storagePath = appConfig.storagePath

  // create folder if not exist
  if (!fs.existsSync(storagePath))
    fs.mkdirSync(storagePath, { recursive: true })

  const files = await readdir(storagePath, {
    withFileTypes: true,
  })

  // loop feach file to get detail information
  for (const file of files) {
    try {
      // get metadata for each files
      const stats: fs.Stats = await fs.promises.stat(
        path.join(storagePath, file.name)
      )

      loadedFiles.push({
        name: file.name,
        path: storagePath,
        size: stats.size,
        lastModified: stats.mtime,
      })
    } catch (err) {
      console.error(`[ERROR] Failed to read ${file.name} metadata`)
      throw new Error(`Failed to read ${file.name} metadata. ${err}`)
    }
  }
  return loadedFiles
}
