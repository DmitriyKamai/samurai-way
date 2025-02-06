import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <main className={s.profile}>
      <ProfileInfo />
      <MyPosts storage={props.storage}/>
    </main>
  )
}

export default Profile;