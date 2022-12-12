"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataMySql = void 0;
const sequelize_1 = require("sequelize");
const mySql_1 = require("../database/mySql");
exports.dataMySql = mySql_1.mysql.define('mySqlModel', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: sequelize_1.DataTypes.NUMBER
    },
    departureLocal: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    destinationLocal: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    departureDate: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    returnDate: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    travellers: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    transportation: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    contact: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    },
    info: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
}, {
    tableName: 'Quotes',
    timestamps: false
});
