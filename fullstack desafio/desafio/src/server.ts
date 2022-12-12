//imports
//standard
import dotenv from "dotenv";
import express, { Request, Response } from "express";
import cors from "cors";
import path from "path";

//local
import mainRouter from "./routers/main";
import { mysqlStatusConnection } from "./database/mySql";

//config dotenv
dotenv.config();

//databases connection
mysqlStatusConnection();

//instance server
const server = express();

//Config server
server.use(cors({
    origin: "/",
    methods: ["POST", "GET", "PUT", "DELETE"]
}));
server.use(express.json());

//routes
//public
server.use(express.static(path.join(__dirname, "../public")));
//post method
server.use(express.urlencoded({extended:true}));

//standard
server.use("/", mainRouter);

//error
server.use((req: Request, res: Response) => {
    res.status(404).send("Página não encontrada!")
})

//start server
server.listen(process.env.PORT);
