import React from "react";
import s from './Post.module.css';

function Post() {
    return (
        <div className={s.post}>
          <span className={s.delete}>&times;</span>
          <div className={s.postContent}>
            <img src="https://i.ibb.co/CDYzqYW/2025-01-29-222000471.png" alt="" className={s.postAva} />
            <div className={s.postText}>Сегодня ел влажные корма.</div>
          </div>
          <div>
            <button className={s.like}>Like</button>
          </div>
        </div>
    )
}

export default Post;