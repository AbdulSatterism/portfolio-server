import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { projectServices } from './project.service';

const createProject = catchAsync(async (req, res) => {
  const result = await projectServices.createProjectIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'project created successfully',
    data: result,
  });
});

const getAllProjects = catchAsync(async (req, res) => {
  const result = await projectServices.getAllProjectsFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'projects retrieved successfully',
    data: result,
  });
});

const singleProject = catchAsync(async (req, res) => {
  const result = await projectServices.getSingleProjectFromDB(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'single project get successfully',
    data: result,
  });
});

const updateProject = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await projectServices.updateProjectIntoDB(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'projects updated successfully',
    data: result,
  });
});

const deleteProjects = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await projectServices.deleteProjectFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project deleted successfully',
    data: result,
  });
});

export const projectControllers = {
  createProject,
  getAllProjects,
  updateProject,
  deleteProjects,
  singleProject,
};
