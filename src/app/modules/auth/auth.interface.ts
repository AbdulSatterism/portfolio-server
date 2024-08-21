import { USER_ROLE } from './auth.const';

export type TSignup = {
  email: string;
  role: string;
  password: string;
};

export type TLogin = {
  email: string;
  password: string;
};

export type TUserRole = keyof typeof USER_ROLE;
