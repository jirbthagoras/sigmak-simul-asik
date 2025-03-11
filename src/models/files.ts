import path from "path"
import { DataTypes } from "sequelize"
import { database } from "../config/sequelize"

export const BackupFilesMetadata = database.define(
  "backup_metadata",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ext: {
      type: DataTypes.STRING(5),
      allowNull: false,
    },
    path: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mimeType: {
      type: DataTypes.STRING(129),
      allowNull: false,
    },
    size: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    fullPath: {
      type: DataTypes.VIRTUAL,
      get() {
        return path.join(
          this.getDataValue("path"),
          this.getDataValue("fullName")
        )
      },
    },
    fullName: {
      type: DataTypes.VIRTUAL,
      get() {
        return `${this.getDataValue("name")}.${this.getDataValue("ext")}`
      },
    },
  },
  {
    timestamps: true,
    createdAt: true,
    updatedAt: true,
  }
)

// BackupFilesMetadata.sync({ alter: true })
