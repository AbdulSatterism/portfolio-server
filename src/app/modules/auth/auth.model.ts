import { model, Schema } from 'mongoose';
import { TSignup } from './auth.interface';

const authSchema = new Schema<TSignup>(
  {
    email: { type: String, required: true, unique: true },
    role: {
      type: String,
      enum: ['admin', 'user'],
      required: true,
    },
    password: { type: String, required: true },
  },
  { timestamps: true },
);

// authSchema.pre('save', function () {
//   const { password } = this;
//   bcrypt.genSalt(12, function (err, salt) {
//     bcrypt.hash(password, salt, function (hash) {
//       console.log(hash);
//     });
//   });
// });

export const Auth = model<TSignup>('Auth', authSchema);
