import { Education } from './education.model';
import { TEducation } from './education.interface';

const createEducationIntoDB = async (payload: TEducation) => {
  const result = await Education.create(payload);
  return result;
};

const getAllEducationFromDB = async () => {
  const result = await Education.find();
  return result;
};

const updateEducationIntoDB = async (
  id: string,
  payload: Partial<TEducation>,
) => {
  const result = await Education.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return result;
};

const deleteEducationFromDB = async (id: string) => {
  const result = await Education.findByIdAndDelete(id, { new: true });
  return result;
};

export const educationServices = {
  createEducationIntoDB,
  getAllEducationFromDB,
  updateEducationIntoDB,
  deleteEducationFromDB,
};
