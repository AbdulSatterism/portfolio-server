import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { authValidations } from './auth.validation';
import { authControllers } from './auth.controller';

const router = express.Router();

router.post(
  '/signup',
  validateRequest(authValidations.signupValidationSchema),
  authControllers.signupUser,
);

// router.post(
//   '/login',
//   validateRequest(AuthValidations.loginValidationSchema),
//   AuthControllers.loginUser,
// );

export const AuthRoutes = router;
