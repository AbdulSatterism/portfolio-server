import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { authValidations } from './auth.validation';
import { authControllers } from './auth.controller';
import auth from '../../middleware/auth';

const router = express.Router();

router.post(
  '/signup',
  validateRequest(authValidations.signupValidationSchema),
  authControllers.signupUser,
);

router.post(
  '/login',
  validateRequest(authValidations.loginValidationSchema),
  authControllers.loginUser,
);

router.get('/users', auth('admin'), authControllers.allUsers);

router.delete('/users/:id', auth('admin'), authControllers.deleteUser);

router.patch('/users/:id', auth('admin'), authControllers.updateRole);

export const AuthRoutes = router;
