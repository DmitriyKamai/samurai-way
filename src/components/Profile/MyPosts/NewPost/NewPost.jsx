import React from "react";
import s from './NewPost.module.css';

const NewPost = () => {
    return (
        <form className={s.newPost}>
          <div className={s.newPostTitle}>New post</div>
          <textarea className={s.newPostArea} placeholder="Write message" name="newPostArea" id="newPostArea"></textarea>
          <button className={s.sendNewPost}>Add new post</button>
        </form>
    )
}

export default NewPost;