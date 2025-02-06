import React from "react";
import s from './NewPost.module.css';

const NewPost = (props) => {

  let newPostElement = React.createRef();

  let addNewPost = (e) => {
    e.preventDefault();
    props.storage.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.storage.setNewPostText(text);
  };

  return (
    <form className={s.newPost}>
      <div className={s.newPostTitle}>New post</div>
      <textarea onChange={onPostChange} value={props.state.newPostText} ref={newPostElement} className={s.newPostArea} placeholder="Write message" name="newPostArea"></textarea>
      <button className={s.sendNewPost} onClick={addNewPost}>Add new post</button>
    </form>
  )
}

export default NewPost;