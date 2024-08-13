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

// const loginUser = catchAsync(async (req, res) => {
//   const result = await authServices.loginUser(req.body);

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'user login successfully',
//     token: result?.accessToken,
//     data: result?.userRes,
//   });
// });

export const authControllers = {
  signupUser,
};
