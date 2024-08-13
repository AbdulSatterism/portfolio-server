import { z } from 'zod';

const createDevInfoValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    title: z.string(),
    summary: z.string(),
    email: z.string(),
    linkedin: z.string(),
    github: z.string(),
    facebook: z.string(),
    resume: z.string(),
    course: z.array(z.string()),
  }),
});

const updateDevInfoValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    title: z.string().optional(),
    summary: z.string().optional(),
    email: z.string().optional(),
    linkedin: z.string().optional(),
    github: z.string().optional(),
    facebook: z.string().optional(),
    resume: z.string().optional(),
    course: z.array(z.string()).optional(),
  }),
});

export const devInfoValidations = {
  createDevInfoValidationSchema,
  updateDevInfoValidationSchema,
};
