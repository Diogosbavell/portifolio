"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readDet = exports.readAll = exports.home = void 0;
const mySqlModel_1 = require("../models/mySqlModel");
const path_1 = __importDefault(require("path"));
const home = (req, res) => {
    res.sendFile('index.html', { root: `${path_1.default.join(__dirname, "../../public/")}` });
};
exports.home = home;
//CRUD
const readAll = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const dataMy = yield mySqlModel_1.dataMySql.findAll({
        attributes: {
            exclude: ['travellers', 'contact', 'info', 'transportation']
        }
    });
    return (res.status(200).json({
        dataMySql: dataMy,
    }));
});
exports.readAll = readAll;
const readDet = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const dataMy = yield mySqlModel_1.dataMySql.findByPk(req.params.id);
    res.json({ dataMySql: dataMy });
});
exports.readDet = readDet;
