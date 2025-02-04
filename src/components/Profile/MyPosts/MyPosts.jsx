import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";

const MyPosts = (props) => {

  let posts = [
    {
      id: 1, likesCount: '23', message: 'Сегодня ел влажные корма.'
    },
    {
      id: 2, likesCount: '3213', message: 'Вчера ел сгущёнку с Богданчоусом'
    },
    {
      id: 3, likesCount: '223', message: 'Сегодня встречался с Дашей за гаражами'
    }
  ]

  let postsElements = posts.map(post => <Post id={post.id} likesCount={post.likesCount} message={post.message} />)

    return (
      <div className={s.myPosts}>
        <NewPost />
        {postsElements}
      </div>
    )
}

export default MyPosts;