import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { devInfoValidations } from './developerInfo.validation';
import { devInfoControllers } from './developerInfo.controller';

const router = express.Router();

router.post(
  '/create-dev-info',
  validateRequest(devInfoValidations.createDevInfoValidationSchema),
  devInfoControllers.createDevInfo,
);

router.put(
  '/:id',
  validateRequest(devInfoValidations.updateDevInfoValidationSchema),
  devInfoControllers.updateDevInfo,
);

router.get('/', devInfoControllers.getAllDevInfo);

router.delete('/:id', devInfoControllers.deleteDevInfo);

export const DevInfoRoutes = router;
