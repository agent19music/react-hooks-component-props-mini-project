import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  const blogname = blogData.name;
  const about = blogData.about;
  const image = blogData.image;
  const posts = blogData.posts;
  return (
    <div className="App">
      <Header name ={blogname}/>
      <About about ={about} image={image}/>
      <ArticleList posts={posts}/>
    </div>
  );
}

export default App;
