import nodemailer from 'nodemailer';
import config from '../../config';

// :TODO incomplete this task

export const sendEmail = async (
  email: string,
  message: string,
  name: string,
) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: config.host_mail,
      pass: config.mail_pass,
    },
  });

  await transporter.sendMail({
    from: 'mdabdulsatter12345@gmail.com', // sender address
    to: email, // list of receivers
    subject: ` ${name} From My Portfolio`, // Subject line
    text: 'message', // plain text body
    html: message, // html body
  });
};
