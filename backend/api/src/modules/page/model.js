import mongoose, { Schema } from 'mongoose';

const Page = new Schema(
  {
    path: { type: String, required: true },
    title: { type: String, required: true },
    body: { type: String, required: true },
    style: { type: String, required: true },
    categories: { type: [String], required: true },
    tags: { type: [String], required: true },
  },
  { timestamps: true },
);

export default mongoose.model('pages', Page);