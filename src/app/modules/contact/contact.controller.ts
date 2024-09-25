import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { sendEmail } from './contact.utils';

const createContact = catchAsync(async (req, res) => {
  const { name, email, message } = req.body;

  await sendEmail(email, message, name);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'mail sent successfully',
    data: {},
  });
});

export const contact = {
  createContact,
};
