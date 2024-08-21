import { model, Schema } from 'mongoose';
import { TSignup } from './auth.interface';
import bcrypt from 'bcrypt';
import config from '../../config';

const authSchema = new Schema<TSignup>(
  {
    email: { type: String, required: true, unique: true },
    role: { type: String, default: 'admin' },
    password: { type: String, required: true },
  },
  { timestamps: true },
);

authSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, Number(config.salt_round));
  next();
});

//pre save middleware or hook in mongoose document middleware

authSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});

export const Auth = model<TSignup>('Auth', authSchema);
