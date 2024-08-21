import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { educationValidations } from './education.validation';
import { educationControllers } from './education.controller';
import auth from '../../middleware/auth';

const router = express.Router();

router.post(
  '/create-education',
  auth('admin'),
  validateRequest(educationValidations.createEducationValidationSchema),
  educationControllers.createEducation,
);

router.put(
  '/:id',
  auth('admin'),
  validateRequest(educationValidations.updateEducationValidationSchema),
  educationControllers.updateEducation,
);

router.get('/', educationControllers.getAllEducation);

router.delete('/:id', auth('admin'), educationControllers.deleteEducation);

export const EducationRoutes = router;
