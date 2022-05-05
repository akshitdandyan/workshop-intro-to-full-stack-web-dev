import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import PostInput from "./components/PostInput";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/getposts")
      .then((response) => response.json())
      .then((json) => setPosts(json.posts));
  }, []);

  return (
    <div className="App">
      <Header />
      <PostInput />
      <hr />
      <h2>Posts:</h2>
      {posts.map((post) => (
        <div>
          <p>{post.content}</p>
          <b>{post.category}</b>
        </div>
      ))}
    </div>
  );
}

export default App;
