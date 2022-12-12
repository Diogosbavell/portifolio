import { Model, DataTypes } from "sequelize";
import { mysql } from "../database/mySql";

interface userType extends Model {
    id: number,
    departureLocal: string,
    destinationLocal: string,
    departureDate: string,
    returnDate: string,
    travellers:number,
    transportation:string,
    contact:string,
    price:number,
    info:string

}

export const dataMySql = mysql.define<userType>('mySqlModel', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.NUMBER
    },
    departureLocal: {
        type: DataTypes.STRING,
        allowNull:false
    },
    destinationLocal: {
        type: DataTypes.STRING,
        allowNull:false
    },
    departureDate: {
        type: DataTypes.STRING,
        allowNull:false
    },
    returnDate: {
        type: DataTypes.STRING,
        allowNull:false
    },
    travellers: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull:false
    },
    transportation: {
        type: DataTypes.STRING,
        allowNull:false
    },
    contact: {
        type: DataTypes.STRING,
        allowNull:false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull:false
    },
    info: {
        type: DataTypes.STRING,
        allowNull:false
    },
    
}, {
    tableName: 'Quotes',
    timestamps: false
})