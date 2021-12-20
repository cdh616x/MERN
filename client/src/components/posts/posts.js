import React from "react";
import { useSelector } from "react-redux";
import Post from ".//post/post.js";


const Posts = () => {
  const posts = useSelector((posts) => posts.posts)
  console.log(posts)
  return (
    <>
     <h1>POSTS</h1>
     <Post />
     <Post />
    </>
  );
}

export default Posts;
