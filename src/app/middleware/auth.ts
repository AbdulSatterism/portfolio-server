import { NextFunction, Request, Response } from 'express';
import catchAsync from '../utils/catchAsync';
import AppError from '../errors/appError';
import httpStatus from 'http-status';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config';
import { TUserRole } from '../modules/auth/auth.interface';

const auth = (...requireRole: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const tokenWithBearer = req.headers.authorization;
    const token = tokenWithBearer?.split(' ')[1];

    // check token exist or not
    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized!!!');
    }

    //check token valid or not

    const decoded = jwt.verify(
      token,
      config.jwt_access_token as string,
    ) as JwtPayload;

    // console.log(decoded);
    // check role
    const { role } = decoded;

    if (requireRole && !requireRole.includes(role)) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized!!!');
    }

    req.user = decoded as JwtPayload;

    next();
  });
};

export default auth;
