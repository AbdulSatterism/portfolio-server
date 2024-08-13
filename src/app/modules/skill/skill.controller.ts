import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { skillServices } from './skill.service';

const createSkill = catchAsync(async (req, res) => {
  const result = await skillServices.createSkillIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'skill created successfully',
    data: result,
  });
});

const getAllSkills = catchAsync(async (req, res) => {
  const result = await skillServices.getAllSkillFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'skills retrieved successfully',
    data: result,
  });
});

const updateSkill = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await skillServices.updateSkillIntoDB(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'skill updated successfully',
    data: result,
  });
});

const deleteSkill = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await skillServices.deleteSkillFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'skill deleted successfully',
    data: result,
  });
});

export const skillControllers = {
  createSkill,
  getAllSkills,
  updateSkill,
  deleteSkill,
};
