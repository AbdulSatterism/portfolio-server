import { model, Schema } from 'mongoose';
import { TProject } from './project.interface';

const projectSchema = new Schema<TProject>(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    technologies: { type: [String], required: true },
    userDescription: { type: String, required: true },
    adminDescription: { type: String, required: true },
    clientSite: { type: String, required: true },
    serverSite: { type: String, required: true },
    liveSite: { type: String, required: true },
  },
  { timestamps: true },
);

export const Project = model<TProject>('Project', projectSchema);
