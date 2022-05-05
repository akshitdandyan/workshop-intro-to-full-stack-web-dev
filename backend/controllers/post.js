import Post from "../model/Post.js";

export async function createPost(request, response) {
  try {
    const postData = request.body;

    if (!postData.content || !postData.category) {
      return response
        .status(400)
        .json({ error: "Both content and category field should be provided" });
    }

    const newPost = await Post.create(postData);
    response.json(newPost);
  } catch (error) {
    console.log("error -", error);
    response.status(500).json({
      error: "Something went wrong.",
    });
  }
}

export async function getPosts(request, response) {
  try {
    const posts = await Post.find({});
    response.json({ posts: posts });
  } catch (error) {
    console.log("error -", error);
    response.status(500).json({
      error: "Something went wrong.",
    });
  }
}
