import { TDevInfo } from './developerInfo.interface';
import { DevInfo } from './developerInfo.model';

const createDevInfoIntoDB = async (payload: TDevInfo) => {
  const result = await DevInfo.create(payload);
  return result;
};

const getAllDevInfoFromDB = async () => {
  const result = await DevInfo.find();
  return result;
};

const updateDevInfoIntoDB = async (id: string, payload: Partial<TDevInfo>) => {
  const result = await DevInfo.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return result;
};

const deleteDevInfoFromDB = async (id: string) => {
  const result = await DevInfo.findByIdAndDelete(id, { new: true });
  return result;
};

export const DevInfoServices = {
  createDevInfoIntoDB,
  getAllDevInfoFromDB,
  updateDevInfoIntoDB,
  deleteDevInfoFromDB,
};
