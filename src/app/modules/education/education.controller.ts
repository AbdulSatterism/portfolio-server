import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { educationServices } from './education.service';

const createEducation = catchAsync(async (req, res) => {
  const result = await educationServices.createEducationIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Education created successfully',
    data: result,
  });
});

const getAllEducation = catchAsync(async (req, res) => {
  const result = await educationServices.getAllEducationFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Education retrieved successfully',
    data: result,
  });
});

const updateEducation = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await educationServices.updateEducationIntoDB(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Education updated successfully',
    data: result,
  });
});

const deleteEducation = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await educationServices.deleteEducationFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Education deleted successfully',
    data: result,
  });
});

export const educationControllers = {
  createEducation,
  getAllEducation,
  updateEducation,
  deleteEducation,
};
