import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.post}>
          <span className={s.delete}>&times;</span>
          <div className={s.postContent}>
            <img src="https://i.ibb.co/CDYzqYW/2025-01-29-222000471.png" alt="" className={s.postAva} />
            <div className={s.postText}>{props.message}</div>
          </div>
          <div className={s.likes}>
            <span className={s.showLikes}>{props.likesCount}</span>
            <button className={s.likeButton}>&#10084;</button>
          </div>
        </div>
    )
}

export default Post;