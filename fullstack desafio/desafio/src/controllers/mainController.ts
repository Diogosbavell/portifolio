import { NextFunction, Request, Response } from "express";
import { dataMySql } from "../models/mySqlModel";
import path from "path";

export const home = (req: Request, res: Response) => {
    res.sendFile('index.html', path.resolve(__dirname, "../../public"));
}

//CRUD
export const readAll = async (req: Request, res: Response, next: NextFunction) => {
    const dataMy = await dataMySql.findAll({
        attributes: {
            exclude: ['travellers', 'contact','info','transportation']
        }
    });
    return (res.status(200).json({
        dataMySql: dataMy,
    }));
}

export const readDet = async (req: Request, res: Response, next: NextFunction) => {
    const dataMy = await dataMySql.findByPk(req.params.id as string);
    res.json({  dataMySql: dataMy });
        
}
