import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";

const MyPosts = (props) => {

  let postsElements = props.state.posts.map(post => <Post id={post.post_id} likesCount={post.likesCount} message={post.message} />)

  return (
    <div className={s.myPosts}>
      <NewPost state={props.state} dispatch={props.dispatch} />
      {postsElements}
    </div>
  )
}

export default MyPosts;