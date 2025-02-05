import React from "react";
import s from './NewPost.module.css';

const NewPost = (props) => {

  let newPostElement = React.createRef();

  let addNewPost = () => {
    let text = newPostElement.current.value
    props.addPost(text);
  };
    return (
        <form className={s.newPost}>
          <div className={s.newPostTitle}>New post</div>
          <textarea ref={newPostElement} className={s.newPostArea} placeholder="Write message" name="newPostArea"></textarea>
          <button className={s.sendNewPost} onClick={addNewPost}>Add new post</button>
        </form>
    )
}

export default NewPost;