import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { projectValidations } from './project.validation';
import { projectControllers } from './project.controller';

const router = express.Router();

router.post(
  '/create-project',
  validateRequest(projectValidations.createProjectValidationSchema),
  projectControllers.createProject,
);

router.get('/', projectControllers.getAllProjects);

router.put(
  '/:id',
  validateRequest(projectValidations.updateProjectValidationSchema),
  projectControllers.updateProject,
);

router.delete('/:id', projectControllers.deleteProjects);

export const ProjectRoutes = router;
