import { TProject } from './project.interface';
import { Project } from './project.model';

const createProjectIntoDB = async (payload: TProject) => {
  const result = await Project.create(payload);
  return result;
};

const getAllProjectsFromDB = async () => {
  const result = await Project.find().sort({
    createdAt: -1,
  });
  return result;
};

const getSingleProjectFromDB = async (id:string) => {
  const result = await Project.findById(id)
  return result;
};

const updateProjectIntoDB = async (id: string, payload: Partial<TProject>) => {
  const result = await Project.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return result;
};

const deleteProjectFromDB = async (id: string) => {
  const result = await Project.findByIdAndDelete(id, { new: true });
  return result;
};

export const projectServices = {
  createProjectIntoDB,
  getAllProjectsFromDB,
  updateProjectIntoDB,
  deleteProjectFromDB,
  getSingleProjectFromDB
};
