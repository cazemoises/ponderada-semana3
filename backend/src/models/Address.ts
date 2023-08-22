import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/pg";

export interface IAddress extends Model {
    id: number,
    user_id: number,
    state: string,
    city: string,
    street: string,
    number: number
};

export const Address = sequelize.define<IAddress>("Address", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    state: { 
        type: DataTypes.TEXT,
        allowNull: false
    },
    city: { 
        type: DataTypes.TEXT,
        allowNull: false
    },
    street: { 
        type: DataTypes.TEXT,
        allowNull: false
    },
    number: { 
        type: DataTypes.INTEGER,
        allowNull: false
    },
    user_id: {
        type:DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "User"
        }
    }
}, {
    tableName: "address",
    timestamps: false
});