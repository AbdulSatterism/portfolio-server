import { Router } from 'express';
import { ProjectRoutes } from '../modules/project/project.route';
import { SkillRoutes } from '../modules/skill/skill.route';
import { DevInfoRoutes } from '../modules/developerInfo/developerInfo.route';
import { EducationRoutes } from '../modules/education/education.route';
import { AuthRoutes } from '../modules/auth/auth.route';
import { contactRoute } from '../modules/contact/contact.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/projects',
    route: ProjectRoutes,
  },
  {
    path: '/skills',
    route: SkillRoutes,
  },
  {
    path: '/dev-info',
    route: DevInfoRoutes,
  },
  {
    path: '/educations',
    route: EducationRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/contact',
    route: contactRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
