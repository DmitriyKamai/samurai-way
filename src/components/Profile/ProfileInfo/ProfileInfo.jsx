import React from "react";
import s from './ProfileInfo.module.css';


const ProfileInfo = (props) => {
  return (
    <div className={s.profileInfo}>
      <div className={s.wallpaperWrapper}>
        <img src="https://niti-d.by/wp-content/uploads/2020/10/15.1.jpg" alt="" className={s.wallpaper} />
      </div>
      <div className={s.wrapper}>
        <div className={s.mainBlock}>
          <img src="https://i.ibb.co/CDYzqYW/2025-01-29-222000471.png" alt="" className={s.ava} />
          <div className={s.info}>
            <div className={s.name}>
              Валерий Лохматый
            </div>
            <div className={s.desc}>
              <div className={s.descItem}>Date of Birth: 6 may 2020</div>
              <div className={s.descItem}>City: Minsk</div>
              <div className={s.descItem}>Education: BSPU'18</div>
              <a href="#" className={s.descItem}>https://doggyaquatrip.ru</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;