import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";

const MyPosts = (props) => {

  let postsData = [
    {
      id: 1, likesCount: '23', message: 'Сегодня ел влажные корма.'
    },
    {
      id: 2, likesCount: '3213', message: 'Вчера ел сгущёнку с Богданчоусом'
    }
  ]

    return (
      <div className={s.myPosts}>
        <NewPost />
        <Post id='1' likesCount='23' message='Сегодня ел влажные корма.' />
        <Post id='2' likesCount='3213' message='Вчера ел сгущёнку с Богданчоусом' />
      </div>
    )
}

export default MyPosts;