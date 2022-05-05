import { useState } from "react";
import "./PostInput.scss";

const PostInput = () => {
  // const [count, setCount] = useState(0);
  const [postContent, setPostContent] = useState("");
  const [category, setCategory] = useState("");

  async function submitData() {
    if (postContent === "" || category === "") {
      return console.log("Content or category can't be empty");
    }
    try {
      const response = await fetch("http://localhost:5000/createpost", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: postContent,
          category: category,
        }),
      });
      const json = await response.json();
      console.log("json -", json);
    } catch (error) {
      console.log("error -", error);
    }
  }

  return (
    <div className="post-input-wrapper">
      {/* <h1>{count}</h1> */}
      <h2>Create New Post</h2>
      <textarea
        onChange={(e) => {
          setPostContent(e.target.value);
        }}
        cols="30"
        rows="10"
      ></textarea>
      <select
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      >
        <option value="meme">Meme</option>
        <option value="music">Music</option>
        <option value="news">News</option>
        <option value="other">Other</option>
      </select>
      <button onClick={submitData}>POST</button>
    </div>
  );
};

export default PostInput;
