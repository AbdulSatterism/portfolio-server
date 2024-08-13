import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { educationValidations } from './education.validation';
import { educationControllers } from './education.controller';

const router = express.Router();

router.post(
  '/create-education',
  validateRequest(educationValidations.createEducationValidationSchema),
  educationControllers.createEducation,
);

router.put(
  '/:id',
  validateRequest(educationValidations.updateEducationValidationSchema),
  educationControllers.updateEducation,
);

router.get('/', educationControllers.getAllEducation);

router.delete('/:id', educationControllers.deleteEducation);

export const EducationRoutes = router;
