import React from "react";
import s from './NewPost.module.css';

const NewPost = (props) => {
  let newPostElement = React.createRef();

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.postChange(text)
  }

  let onAddPost = () => {
    props.addPost()
  }

  return (
    <div className={s.newPost}>
      <div className={s.newPostTitle}>New post</div>
      <textarea onChange={onPostChange} value={props.state.newPostText} ref={newPostElement} className={s.newPostArea} placeholder="Write message" name="newPostArea"></textarea>
      <button className={s.sendNewPost} onClick={onAddPost}>Add new post</button>
    </div>
  )
}

export default NewPost;