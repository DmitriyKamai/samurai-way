import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <main className={s.profile}>
      <ProfileInfo />
      <MyPosts posts={props.profilePage.posts} newPostText={props.profilePage.newPostText} addPost={props.addPost} setNewPostText={props.setNewPostText}/>
    </main>
  )
}

export default Profile;