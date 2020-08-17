import {Request, Response, NextFunction} from 'express'
import jwt from 'jsonwebtoken'

interface IPayload{
    _id: string,
}

export const tokenValidation = (req: Request, res: Response, next: NextFunction) => {
    const token: any = res.header('auth-token');
    if (!token)
        return res.status(401).json('Acceso denegado')
    const payload = jwt.verify(token, process.env.TOKEM_SECRET || 'tokenTest') as IPayload
    req.userId = payload._id;
    next()
}