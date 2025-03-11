import { DataTypes } from "sequelize"
import { database } from "../config/sequelize"
import { UserInstance } from "../types/users"
import { BackupFilesMetadata } from "./files"

export const Users = database.define<UserInstance>(
  "users",
  {
    userId: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      unique: true,
      defaultValue: DataTypes.UUIDV4,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fullName: {
      type: DataTypes.VIRTUAL,
      get() {
        return this.getDataValue("lastName") === null
          ? this.getDataValue("firstName")
          : `${this.getDataValue("firstName")} ${this.getDataValue("lastName")}`
      },
    },
  },
  {
    timestamps: true,
    createdAt: true,
    updatedAt: false,
  }
)

Users.hasMany(BackupFilesMetadata, {
  sourceKey: "userId",
  foreignKey: {
    name: "userId",
    allowNull: false,
  },
})

BackupFilesMetadata.belongsTo(Users, {
  foreignKey: "userId",
})

// Users.sync({ alter: true })
