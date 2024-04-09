import mongoose, { Mongoose, model } from "mongoose";

type Artical = {
  headline: string;
  small_description: string;
  description: string;
};

const NewsDB = new mongoose.Schema<Artical>({
  headline: { type: String },
  small_description: { type: String },
  description: { type: String },
});

export const articalModal = () => {
  return mongoose.models.articles || model<Artical>("articles", NewsDB);
};
