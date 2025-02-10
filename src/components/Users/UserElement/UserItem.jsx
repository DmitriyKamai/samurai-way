import React from "react";
import s from './UserItem.module.css';

const UserItem = (props) => {
  const userItem = React.createRef();

  const onToggleFriend = () => {
    props.toggleFriend(+userItem.current.dataset.id)
  }
  
  return (
    <div className={s.userItem} data-id={props.id} ref={userItem}>
      <img src={props.imgSrc} alt="" className={s.userAva} />
      <div className={s.userInfo}>
        <h3 className={s.userName}>{props.name}</h3>
        <div className={s.userCity}>{props.city}</div>
        <button onClick={onToggleFriend} className={props.isFriend?s.deleteFriend:s.addFriend}>{props.isFriend?'Delete friend':'Add friend'}</button>
      </div>
    </div>
  )
}

export default UserItem;