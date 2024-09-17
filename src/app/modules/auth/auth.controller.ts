import httpStatus from 'http-status';
import { authServices } from './auth.service';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';

const signupUser = catchAsync(async (req, res) => {
  const result = await authServices.signupUserInDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'user signup successfully',
    data: result,
  });
});

const loginUser = catchAsync(async (req, res) => {
  const result = await authServices.loginUser(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'user login successfully',
    data: result,
  });
});

const allUsers = catchAsync(async (req, res) => {
  const result = await authServices.allUserFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'all user retrive done',
    data: result,
  });
});

const deleteUser = catchAsync(async (req, res) => {
  const result = await authServices.deleteUserFromDB(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'user deleted successfully',
    data: result,
  });
});

const updateRole = catchAsync(async (req, res) => {
  const result = await authServices.toggleRoleInDB(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'role update done',
    data: result,
  });
});

export const authControllers = {
  signupUser,
  loginUser,
  allUsers,
  deleteUser,
  updateRole,
};
