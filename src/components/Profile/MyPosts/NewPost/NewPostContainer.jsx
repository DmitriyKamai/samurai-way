import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../../redux/profilePage-reducer";
import NewPost from "./NewPost";

const NewPostContainer = (props) => {

  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let postChange = (text) => {
    props.store.dispatch(updateNewPostTextActionCreator(text));
  };

  return (<NewPost
    state={state.profilePage}
    addPost={addPost}
    postChange={postChange} />)
}

export default NewPostContainer;