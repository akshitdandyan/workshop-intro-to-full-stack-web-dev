import mongoose from "mongoose";

const PostSchema = mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const Post = mongoose.model("post", PostSchema);

export default Post;
