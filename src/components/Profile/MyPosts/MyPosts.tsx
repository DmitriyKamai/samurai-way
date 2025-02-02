import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";

function MyPosts() {
    return (
      <div className={s.myPosts}>
        <NewPost />
        <Post />
        <Post />
      </div>
    )
}

export default MyPosts;