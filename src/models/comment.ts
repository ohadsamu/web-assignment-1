import mongoose from "mongoose";
const CommentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  post: { type: String, required: true },
});

export default mongoose.model("Comment", CommentSchema);
