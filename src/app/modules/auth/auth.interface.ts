import { USER_ROLE } from './auth.const';

export type TSignup = {
  email: string;
  password: string;
  role: 'admin' | 'user';
};

export type TLogin = {
  email: string;
  password: string;
};

export type TUserRole = keyof typeof USER_ROLE;
