import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";


const ProfileInfo = (props) => {
  if (!props.state.profile) {
    return <Preloader />
  }

  return (
    <div className={s.profileInfo}>
      <div className={s.wallpaperWrapper}>
        <img src="https://niti-d.by/wp-content/uploads/2020/10/15.1.jpg" alt="" className={s.wallpaper} />
      </div>
      <div className={s.wrapper}>
        <div className={s.mainBlock}>
          <img src={props.state.profile.photos.large} alt="" className={s.ava} />
          <div className={s.info}>
            <div className={s.name}>
              {props.state.profile.fullName}
            </div>
            <div className={s.desc}>
              <div className={s.descItem}>About Me: {props.state.profile.aboutMe}</div>
              <a href="#" className={s.descItem}>Facebook: {props.state.profile.contacts.facebook}</a>
              <a href="#" className={s.descItem}>Instagram: {props.state.profile.contacts.instagram}</a>
              <a href="#" className={s.descItem}>Twitter: {props.state.profile.contacts.twitter}</a>
              <a href="#" className={s.descItem}>Vk: {props.state.profile.contacts.vk}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;