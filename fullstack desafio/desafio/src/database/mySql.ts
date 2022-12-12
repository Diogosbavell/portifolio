import dotenv from "dotenv";
import { Sequelize } from "sequelize";

//condif dotenv
dotenv.config();

export const mysql = new Sequelize(
    process.env.MYSQL_DB as string,
    process.env.MYSQL_USER as string,
    process.env.MYSQL_PASSWORD as string,
    {
        dialect: "mysql",
        host: process.env.MYSQL_HOST as string,
        port: parseInt(process.env.MYSQL_PORT as string),
    }
);

export const mysqlStatusConnection=async()=>{
    try{
        console.log("conectando ao MySql");
        await mysql.authenticate();
        console.log("conexão estabelecida com o MySql!");
    }
    catch(error){
        console.log("error: ",error);
    }
}