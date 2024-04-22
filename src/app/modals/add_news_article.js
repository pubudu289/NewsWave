import mongoose, { Schema, Mongoose, model } from "mongoose";

const addArticleSchema = new Schema(
  {
    headline: String,
    small_description: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const Article =
  mongoose.models.Article || mongoose.model("Article", addArticleSchema);
export default Article;
