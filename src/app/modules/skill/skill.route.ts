import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { skillValidations } from './skill.validation';
import { skillControllers } from './skill.controller';

const router = express.Router();

router.post(
  '/create-skill',
  validateRequest(skillValidations.createSkillValidationSchema),
  skillControllers.createSkill,
);

router.get('/', skillControllers.getAllSkills);

router.put(
  '/:id',
  validateRequest(skillValidations.updateSkillValidationSchema),
  skillControllers.updateSkill,
);

router.delete('/:id', skillControllers.deleteSkill);

export const SkillRoutes = router;
