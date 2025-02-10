import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import NewPostContainer from "./NewPost/NewPostContainer";

const MyPosts = (props) => {
  let postsElements = props.state.posts.map(post => <Post id={post.post_id} key={post.post_id} likesCount={post.likesCount} message={post.message} />)
  return (
    <div className={s.myPosts} >
      <NewPostContainer />
      {postsElements}
    </div >
  )
}


export default MyPosts;