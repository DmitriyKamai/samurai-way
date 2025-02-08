import React from "react";
import s from './NewPost.module.css';
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../../redux/profilePage-reducer";

const NewPost = (props) => {

  let newPostElement = React.createRef();

  let addNewPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <div className={s.newPost}>
      <div className={s.newPostTitle}>New post</div>
      <textarea onChange={onPostChange} value={props.state.newPostText} ref={newPostElement} className={s.newPostArea} placeholder="Write message" name="newPostArea"></textarea>
      <button className={s.sendNewPost} onClick={addNewPost}>Add new post</button>
    </div>
  )
}

export default NewPost;