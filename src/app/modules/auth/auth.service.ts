import jwt from 'jsonwebtoken';
import httpStatus from 'http-status';
import AppError from '../../errors/appError';
import { TLogin, TSignup } from './auth.interface';
import bcrypt from 'bcrypt';
import config from '../../config';

import { Auth } from './auth.model';

const signupUserInDB = async (payload: TSignup) => {
  const result = await Auth.create(payload);
  return result;
};

const loginUser = async (payload: TLogin) => {
  const { email, password } = payload;

  // check user exist or not
  const user = await Auth.findOne({ email: email });

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'this user not found');
  }

  //password matched or not
  const hashPassword = user?.password;
  const isPasswordMatch = await bcrypt.compare(password, hashPassword);
  if (!isPasswordMatch) {
    throw new AppError(httpStatus.FORBIDDEN, 'password not matched!!!');
  }

  //    jwt access token
  type TJWTPayload = {
    role: string;
    email: string;
  };

  const jwtPayload: TJWTPayload = {
    role: user?.role,
    email: user?.email,
  };

  const accessToken = await jwt.sign(
    jwtPayload,
    config.jwt_access_token as string,
    {
      expiresIn: config.jwt_access_expire_in,
    },
  );

  return accessToken;
};

const allUserFromDB = async () => {
  const result = await Auth.find();
  return result;
};

const toggleRoleInDB = async (id: string) => {
  const user = await Auth.findById(id);
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'user not found');
  }

  // Toggle the role
  const result = await Auth.findByIdAndUpdate(
    id,
    { role: user.role === 'admin' ? 'user' : 'admin' },
    { new: true },
  );
  return result;
};

const deleteUserFromDB = async (id: string) => {
  const result = await Auth.findByIdAndDelete(id, { new: true });
  return result;
};

export const authServices = {
  signupUserInDB,
  loginUser,
  deleteUserFromDB,
  allUserFromDB,
  toggleRoleInDB,
};
