import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";

const MyPosts = () => {
    return (
      <div className={s.myPosts}>
        <NewPost />
        <Post message='Сегодня ел влажные корма.' />
        <Post message='Вчера ел сгущёнку с Богданчоусом' />
      </div>
    )
}

export default MyPosts;