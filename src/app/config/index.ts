import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  salt_round: process.env.SALT,
  jwt_access_token: process.env.JWT_ACCESS_TOKEN,
  jwt_access_expire_in: process.env.JWT_ACCESS_EXPIRE_IN,
  mail_pass: process.env.MAIL_PASS,
  host_mail: process.env.HOST_EMAIL,
};
