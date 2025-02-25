import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import Status from "./Status";


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
          <img src={props.state.profile.photos.large ? props.state.profile.photos.large : 'data:image/png;base64,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'} alt="" className={s.ava} />
          <div className={s.info}>
            <div className={s.name}>
              {props.state.profile.fullName}
            </div>
            <Status status={props.state.status} updateStatus={props.updateStatus}/>
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