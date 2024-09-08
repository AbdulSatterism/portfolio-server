import { z } from 'zod';

const createProjectValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    image: z.string(),
    technologies: z.array(z.string()),
    userDescription: z.string(),
    adminDescription: z.string(),
    clientSite: z.string(),
    serverSite: z.string(),
    liveSite: z.string(),
  }),
});

const updateProjectValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    image: z.string().optional(),
    technologies: z.array(z.string()).optional(),
    userDescription: z.string().optional(),
    adminDescription: z.string().optional(),
    clientSite: z.string().optional(),
    serverSite: z.string().optional(),
    liveSite: z.string().optional(),
  }),
});

export const projectValidations = {
  createProjectValidationSchema,
  updateProjectValidationSchema,
};
