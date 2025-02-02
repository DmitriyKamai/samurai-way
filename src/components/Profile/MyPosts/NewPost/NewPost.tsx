import React from "react";
import s from './NewPost.module.css';

function NewPost() {
    return (
        <form className={s.newPost}>
          <div className={s.newPostTitle}>Новый пост</div>
          <textarea className={s.newPostArea} placeholder="Введите текст" name="newPostArea" id="newPostArea"></textarea>
          <button className={s.sendNewPost}>Опубликовать</button>
        </form>
    )
}

export default NewPost;