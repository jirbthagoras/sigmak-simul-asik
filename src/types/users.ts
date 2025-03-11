import { Model, Optional } from "sequelize"

export interface UserAttributes {
  userId: number
  firstName: string
  lastName: string
  email: string
  address?: string
  password: string
  fullName: string
}

export interface UserCreationAttributes
  extends Optional<UserAttributes, "userId"> {}

export interface UserInstance
  extends Model<UserAttributes, UserCreationAttributes>,
    UserAttributes {
  createdAt?: Date
}
