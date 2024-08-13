import { z } from 'zod';

const createEducationValidationSchema = z.object({
  body: z.object({
    degree: z.string(),
    institution: z.string(),
    startYear: z.string(),
    endYear: z.string().optional(),
  }),
});

const updateEducationValidationSchema = z.object({
  body: z.object({
    degree: z.string().optional(),
    institution: z.string().optional(),
    startYear: z.string().optional(),
    endYear: z.string().optional(),
  }),
});

export const educationValidations = {
  createEducationValidationSchema,
  updateEducationValidationSchema,
};
