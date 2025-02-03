import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";

const MyPosts = () => {
    return (
      <div className={s.myPosts}>
        <NewPost />
        <Post likesAmount='23' message='Сегодня ел влажные корма.' />
        <Post likesAmount='3213' message='Вчера ел сгущёнку с Богданчоусом' />
      </div>
    )
}

export default MyPosts;