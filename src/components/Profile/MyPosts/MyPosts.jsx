import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import NewPostContainer from "./NewPost/NewPostContainer";

const MyPosts = (props) => {
  let state = props.store.getState();
  let postsElements = state.profilePage.posts.map(post => <Post id={post.post_id} likesCount={post.likesCount} message={post.message} />)

  return (
    <div className={s.myPosts}>
      <NewPostContainer store={props.store}/>
      {postsElements}
    </div>
  )
}

export default MyPosts;