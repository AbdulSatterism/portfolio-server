import { model, Schema } from 'mongoose';
import { TEducation } from './education.interface';

const educationSchema = new Schema<TEducation>(
  {
    degree: { type: String, required: true },
    institution: { type: String, required: true },
    startYear: { type: String, required: true },
    endYear: { type: String, required: false },
  },
  { timestamps: true },
);

export const Education = model<TEducation>('Education', educationSchema);
