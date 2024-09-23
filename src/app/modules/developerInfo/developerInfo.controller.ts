import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { DevInfoServices } from './developerInfo.service';

const createDevInfo = catchAsync(async (req, res) => {
  const result = await DevInfoServices.createDevInfoIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Developer created successfully',
    data: result,
  });
});

const getAllDevInfo = catchAsync(async (req, res) => {
  const result = await DevInfoServices.getAllDevInfoFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Developer retrieved successfully',
    data: result,
  });
});

const singleDev = catchAsync(async (req, res) => {
  const result = await DevInfoServices.singleDev(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Developer retrieved successfully',
    data: result,
  });
});

const updateDevInfo = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await DevInfoServices.updateDevInfoIntoDB(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Developer updated successfully',
    data: result,
  });
});

const deleteDevInfo = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await DevInfoServices.deleteDevInfoFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Developer deleted successfully',
    data: result,
  });
});

export const devInfoControllers = {
  createDevInfo,
  getAllDevInfo,
  updateDevInfo,
  deleteDevInfo,
  singleDev,
};
