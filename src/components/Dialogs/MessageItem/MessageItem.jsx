import React from "react";
import s from '../Dialogs.module.css'; 

const MessageItem = (props) => {
  return (
    <div className={s.message}>
      <img src={props.imgSrc} alt="" className={s.messageAva} />
      <div className={s.messageText}>
        {props.message}
      </div>
    </div>
  )
}

export default MessageItem;