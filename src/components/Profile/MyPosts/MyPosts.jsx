import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import NewPostContainer from "./NewPost/NewPostContainer";
import StoreContext from "../../../StoreContext";

const MyPosts = (props) => {

  return <StoreContext.Consumer>
    {(store) => {
      let state = store.getState();
      let postsElements = state.profilePage.posts.map(post => <Post id={post.post_id} likesCount={post.likesCount} message={post.message} />)

      return <div className={s.myPosts}>
        <NewPostContainer />
        {postsElements}
      </div>
    }}
  </StoreContext.Consumer>


}

export default MyPosts;