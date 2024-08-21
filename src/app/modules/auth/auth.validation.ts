import { z } from 'zod';

const signupValidationSchema = z.object({
  body: z.object({
    email: z.string(),
    password: z.string(),
  }),
});

const loginValidationSchema = z.object({
  body: z.object({
    password: z.string(),
    email: z.string(),
  }),
});

export const authValidations = {
  loginValidationSchema,
  signupValidationSchema,
};
