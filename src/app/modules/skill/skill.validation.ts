import { z } from 'zod';

const createSkillValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    image: z.string(),
  }),
});

const updateSkillValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    image: z.string().optional(),
  }),
});

export const skillValidations = {
  createSkillValidationSchema,
  updateSkillValidationSchema,
};
