import { TSkill } from './skill.interface';
import { Skill } from './skill.model';

const createSkillIntoDB = async (payload: TSkill) => {
  const result = await Skill.create(payload);
  return result;
};

const getAllSkillFromDB = async () => {
  const result = await Skill.find().sort({
    createdAt: -1,
  });
  return result;
};

const updateSkillIntoDB = async (id: string, payload: Partial<TSkill>) => {
  const result = await Skill.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return result;
};

const deleteSkillFromDB = async (id: string) => {
  const result = await Skill.findByIdAndDelete(id, { new: true });
  return result;
};

export const skillServices = {
  createSkillIntoDB,
  getAllSkillFromDB,
  updateSkillIntoDB,
  deleteSkillFromDB,
};
