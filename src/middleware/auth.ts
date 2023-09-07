import { NextFunction, Request, Response } from "express";
import { AUTH_TOKEN } from "../util/env";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authToken = String(req.headers.authorization)?.split(' ')[1];
    if(authToken !== AUTH_TOKEN) {
        return res.status(401).json({
            success: false,
            msg: 'Auth token is invalid!'
        })
    }
    next();
}