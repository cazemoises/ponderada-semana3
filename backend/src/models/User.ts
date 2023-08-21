import { DataTypes, Model } from "sequelize"
import { sequelize } from "../config/pg"

export interface IUser extends Model {
    id: number,
    username: string,
    first_name: string,
    last_name: string,
    age: number,
    password: string,
    birthdate: Date
}

export const User = sequelize.define<IUser>("User", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    first_name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    last_name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    birthdate: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    tableName: "user",
    timestamps: false
});