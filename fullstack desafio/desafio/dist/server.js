"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//imports
//standard
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
//local
const main_1 = __importDefault(require("./routers/main"));
const mySql_1 = require("./database/mySql");
//config dotenv
dotenv_1.default.config();
//databases connection
(0, mySql_1.mysqlStatusConnection)();
//instance server
const server = (0, express_1.default)();
//Config server
server.use((0, cors_1.default)({
    origin: "/",
    methods: ["POST", "GET", "PUT", "DELETE"]
}));
server.use(express_1.default.json());
//routes
//public
server.use(express_1.default.static(path_1.default.join(__dirname, "../public")));
//post method
server.use(express_1.default.urlencoded({ extended: true }));
//standard
server.use("/", main_1.default);
//error
server.use((req, res) => {
    res.status(404).send("Página não encontrada!");
});
//start server
server.listen(process.env.PORT);
