import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { projectValidations } from './project.validation';
import { projectControllers } from './project.controller';
import auth from '../../middleware/auth';

const router = express.Router();

router.post(
  '/create-project',
  auth('admin'),
  validateRequest(projectValidations.createProjectValidationSchema),
  projectControllers.createProject,
);

router.get('/', projectControllers.getAllProjects);

router.get('/:id', auth('admin'), projectControllers.singleProject);

router.put(
  '/:id',
  auth('admin'),
  validateRequest(projectValidations.updateProjectValidationSchema),
  projectControllers.updateProject,
);

router.delete('/:id', auth('admin'), projectControllers.deleteProjects);

export const ProjectRoutes = router;
