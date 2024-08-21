import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { skillValidations } from './skill.validation';
import { skillControllers } from './skill.controller';
import auth from '../../middleware/auth';

const router = express.Router();

router.post(
  '/create-skill',
  auth('admin'),
  validateRequest(skillValidations.createSkillValidationSchema),
  skillControllers.createSkill,
);

router.get('/', skillControllers.getAllSkills);

router.put(
  '/:id',
  auth('admin'),
  validateRequest(skillValidations.updateSkillValidationSchema),
  skillControllers.updateSkill,
);

router.delete('/:id', auth('admin'), skillControllers.deleteSkill);

export const SkillRoutes = router;
