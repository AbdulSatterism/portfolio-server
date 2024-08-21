import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { devInfoValidations } from './developerInfo.validation';
import { devInfoControllers } from './developerInfo.controller';
import auth from '../../middleware/auth';

const router = express.Router();

router.post(
  '/create-dev-info',
  auth('admin'),
  validateRequest(devInfoValidations.createDevInfoValidationSchema),
  devInfoControllers.createDevInfo,
);

router.put(
  '/:id',
  auth('admin'),
  validateRequest(devInfoValidations.updateDevInfoValidationSchema),
  devInfoControllers.updateDevInfo,
);

router.get('/', devInfoControllers.getAllDevInfo);

router.delete('/:id', auth('admin'), devInfoControllers.deleteDevInfo);

export const DevInfoRoutes = router;
