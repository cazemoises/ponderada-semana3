import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

export const sequelize = new Sequelize(
    process.env.PG_DB as string,
    process.env.PG_USER as string,
    process.env.PG_PW as string,
    {
        host: process.env.PG_HOST,
        port: parseInt(process.env.PG_PORT || "5432"),
        dialect: 'postgres'
    }
);

const connectToDB = async () => {
    try {

        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        
    } catch (err) {

        console.error('Unable to connect to the database:', err);
        
    }
};

connectToDB();