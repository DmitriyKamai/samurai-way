import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";

const MyPosts = (props) => {

  let postsElements = props.storage.state.posts.map(post => <Post id={post.id} likesCount={post.likesCount} message={post.message} />)

  return (
    <div className={s.myPosts}>
      <NewPost storage={props.storage} />
      {postsElements}
    </div>
  )
}

export default MyPosts;