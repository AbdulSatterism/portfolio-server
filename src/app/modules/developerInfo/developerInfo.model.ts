import { model, Schema } from 'mongoose';
import { TDevInfo } from './developerInfo.interface';

const devInfoSchema = new Schema<TDevInfo>(
  {
    name: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    summary: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    linkedin: { type: String, required: true },
    github: { type: String, required: true },
    facebook: { type: String, required: true },
    resume: { type: String, required: true },
    course: { type: [String], required: true },
  },
  { timestamps: true },
);

export const DevInfo = model<TDevInfo>('DevInfo', devInfoSchema);
